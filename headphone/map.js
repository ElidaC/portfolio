// =========================
//  DATA: replace with yours
// =========================
const DATA = [
    // years: 0-21, volume: 0-10 (0 bottom, 10 top)
    { id:"p01", years:2,  volume:8,  title:"Interviewee 01", preview:"https://picsum.photos/seed/a/640/360", link:"headphone-world/p01.html" },
    { id:"p02", years:6,  volume:2,  title:"Interviewee 02", preview:"https://picsum.photos/seed/b/640/360", link:"headphone-world/p02.html" },
    { id:"p03", years:10, volume:5,  title:"Interviewee 03", preview:"https://picsum.photos/seed/c/640/360", link:"headphone-world/p03.html" },
    { id:"p04", years:14, volume:7,  title:"Interviewee 04", preview:"https://picsum.photos/seed/d/640/360", link:"headphone-world/p04.html" },
    { id:"p05", years:18, volume:3,  title:"Interviewee 05", preview:"https://picsum.photos/seed/e/640/360", link:"headphone-world/p05.html" },
    { id:"p06", years:20, volume:6,  title:"Interviewee 06", preview:"https://picsum.photos/seed/f/640/360", link:"headphone-world/p06.html" },
    { id:"p07", years:1,  volume:4,  title:"Interviewee 07", preview:"https://picsum.photos/seed/g/640/360", link:"headphone-world/p07.html" },
    { id:"p08", years:8,  volume:9,  title:"Interviewee 08", preview:"https://picsum.photos/seed/h/640/360", link:"headphone-world/p08.html" },
    { id:"p09", years:12, volume:1,  title:"Interviewee 09", preview:"https://picsum.photos/seed/i/640/360", link:"headphone-world/p09.html" },
    { id:"p10", years:4,  volume:6,  title:"Interviewee 10", preview:"https://picsum.photos/seed/j/640/360", link:"headphone-world/p10.html" },
    { id:"p11", years:16, volume:4,  title:"Interviewee 11", preview:"https://picsum.photos/seed/k/640/360", link:"headphone-world/p11.html" },
    { id:"p12", years:21, volume:8,  title:"Interviewee 12", preview:"https://picsum.photos/seed/l/640/360", link:"headphone-world/p12.html" },
    { id:"p13", years:9,  volume:3,  title:"Interviewee 13", preview:"https://picsum.photos/seed/m/640/360", link:"headphone-world/p13.html" },
  ];
  
  const PHRASES = [
    '“how loud?”',
    '“what color would you choose…”',
    '“how many years have you been using headphones?”',
    '“how would you describe your headphone world?”',
    '“which brand?”',
    '“when do you use headphones most often?”',
  ];
  
  // ================
  //  Core utilities
  // ================
  const stage = document.getElementById('stage');
  const fade = document.getElementById('fade');
  
  function lerp(a,b,t){ return a + (b-a)*t; }
  function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
  
  function go(url){
    fade.classList.add('on');
    setTimeout(()=> location.href = url, 960);
  }
  
  // =====================================
  //  Place circles (mapped to viewport)
  // =====================================
  const pad = 120;
  const circles = [];
  
  // (tooltip still exists in DOM, but we won’t use it anymore)
  const tip = document.createElement('div');
  tip.className = 'tip';
  tip.innerHTML = `
    <div class="thumb"><img alt="" /></div>
    <p class="title"></p>
    <p class="meta"></p>
  `;
  stage.appendChild(tip);
  
  function computeXY(years, volume){
    const w = window.innerWidth;
    const h = window.innerHeight;
    const left = pad;
    const right = w - pad - 260; // keep clear of slider area
    const top = pad;
    const bottom = h - pad;
  
    const tx = clamp(years / 21, 0, 1);
    const ty = clamp(volume / 10, 0, 1);
  
    const x = lerp(left, right, tx);
    const y = lerp(bottom, top, ty); // invert for bottom->top
    return {x,y};
  }
  
  function renderCircles(){
    circles.length = 0;
    stage.querySelectorAll('.circle').forEach(n=>n.remove());
  
    DATA.forEach((d, idx)=>{
      const el = document.createElement('div');
      el.className = 'circle';
      el.dataset.id = d.id;
      el.dataset.idx = idx;
  
      const {x,y} = computeXY(d.years, d.volume);
      el.style.left = x + 'px';
      el.style.top  = y + 'px';
  
      // ✅ NEW: bind preview image to circle (for CSS hover inside circle)
      el.style.setProperty('--img', `url("${d.preview || ''}")`);
  
      // ✅ NEW: hover -> only this circle visible (image shows via CSS :hover)
      el.addEventListener('mouseenter', ()=>{
        hovered = idx;
        applyBlink();
      });
      el.addEventListener('mouseleave', ()=>{
        hovered = null;
        applyBlink();
      });
  
      // Click goes to their headphone world
      el.addEventListener('click', ()=>{
        if(d.link) go(d.link);
      });
  
      stage.appendChild(el);
      circles.push(el);
    });
  }
  
  // (kept for compatibility; not used)
  function showTip(){ tip.classList.add('on'); }
  function hideTip(){ tip.classList.remove('on'); }
  
  // =====================================
  //  Blinking: show 3–5 circles at once
  //  opacity only 0 / 1
  // =====================================
  let hovered = null;
  let visibleSet = new Set(); // indices currently ON
  
  function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  function pickVisibleSet(){
    const n = circles.length;
    if(n === 0) return new Set();
  
    // 3–5 个
    const k = Math.min(n, 3 + Math.floor(Math.random()*3)); // 3..5
    const s = new Set();
  
    // 保留一部分旧的，避免“全换”太突兀
    const old = Array.from(visibleSet);
    shuffle(old);
    const keep = Math.min(old.length, Math.max(1, Math.floor(k/2))); // keep 1..floor(k/2)
    for(let i=0;i<keep;i++) s.add(old[i]);
  
    while(s.size < k){
      s.add(Math.floor(Math.random()*n));
    }
    return s;
  }
  
  function applyBlink(){
    circles.forEach((c,i)=>{
      const isOn = (hovered !== null) ? (i === hovered) : visibleSet.has(i);
      c.classList.toggle('active', isOn);
  
      // ✅ only 0 or 1
      c.style.opacity = isOn ? '1' : '0';
      c.style.pointerEvents = isOn ? 'auto' : 'none';
    });
  }
  
  // rotate visible set
  let blinkTimer = null;
  function startBlinking(){
    if(blinkTimer) clearInterval(blinkTimer);
    visibleSet = pickVisibleSet();
    applyBlink();
  
    blinkTimer = setInterval(()=>{
      if(hovered !== null) return; // pause rotation while hover
      visibleSet = pickVisibleSet();
      applyBlink();
    }, 2200);
  }
  
  // =====================================
  //  Phrases: sequential “drop” + mouse rotate
  // =====================================
  let mouse = {x: window.innerWidth/2, y: window.innerHeight/2};
  window.addEventListener('mousemove', (e)=>{ mouse.x=e.clientX; mouse.y=e.clientY; });
  
  function spawnPhrase(text){
    const el = document.createElement('div');
    el.className = 'phrase';
    el.textContent = text;
  
    // random position but keep away from slider & edges
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = lerp(120, w-380, Math.random());
    const y = lerp(110, h-140, Math.random());
  
    // base rotation and a small “fall-in”
    const baseRot = lerp(-28, 28, Math.random());
    const startY = y - 18;
  
    el.style.left = x + 'px';
    el.style.top  = startY + 'px';
    el.dataset.baseRot = baseRot.toFixed(2);
  
    stage.appendChild(el);
  
    // enter
    requestAnimationFrame(()=>{
      const mx = (mouse.x / w - 0.5) * 18; // -9..9deg
      const my = (mouse.y / h - 0.5) * 8;  // -4..4deg
      const rot = baseRot + mx + my;
      el.style.transform = `translate(-50%,-50%) rotate(${rot}deg)`;
      el.style.top = y + 'px';
      el.classList.add('show');
    });
  
    // follow mouse rotate while alive
    const tick = ()=>{
      if(!el.isConnected) return;
      const w2 = window.innerWidth, h2 = window.innerHeight;
      const mx = (mouse.x / w2 - 0.5) * 18;
      const my = (mouse.y / h2 - 0.5) * 8;
      const rot = parseFloat(el.dataset.baseRot) + mx + my;
      el.style.transform = `translate(-50%,-50%) rotate(${rot}deg)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  
    // linger longer for readability
    setTimeout(()=> el.classList.add('fade'), 5200);
    setTimeout(()=> el.remove(), 6200);
  }
  
  let phraseIdx = 0;
  function phraseLoop(){
    spawnPhrase(PHRASES[phraseIdx % PHRASES.length]);
    phraseIdx++;
    setTimeout(phraseLoop, 3600);
  }
  
  // =====================================
  //  Slider: drag -> on/off navigation
  // =====================================
  const track = document.getElementById('track');
  const knob  = document.getElementById('knob');
  
  let value = 0.5; // 0..1
  let dragging = false;
  
  function setKnob(v){
    value = clamp(v, 0, 1);
    knob.style.left = (value * 100) + '%';
    knob.setAttribute('aria-valuenow', value.toFixed(2));
  }
  setKnob(0.5);
  
  function pointerToValue(clientX){
    const r = track.getBoundingClientRect();
    return (clientX - r.left) / r.width;
  }
  
  knob.addEventListener('pointerdown', (e)=>{
    dragging = true;
    knob.setPointerCapture(e.pointerId);
    knob.style.cursor = 'grabbing';
  });
  knob.addEventListener('pointermove', (e)=>{
    if(!dragging) return;
    setKnob(pointerToValue(e.clientX));
  });
  knob.addEventListener('pointerup', ()=>{
    dragging = false;
    knob.style.cursor = 'grab';
  
    if(value < 0.20){
      setKnob(0.05);
      go('on.html');
    }else if(value > 0.80){
      setKnob(0.95);
      go('off.html');
    }else{
      setKnob(0.5);
    }
  });
  
  // init
  renderCircles();
  startBlinking();
  phraseLoop();
  
  window.addEventListener('resize', ()=>{
    renderCircles();
    startBlinking();
  });