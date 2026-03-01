// =========================
//  DATA: replace with yours
// =========================
const DATA = [
    { id:"p01", years:4,  volume:5,  title:"Interviewee 01", preview:"bg/amaya2.png", link:"world/amaya.html" },
    { id:"p02", years:10,  volume:5,  title:"Interviewee 02", preview:"bg/ashley2.png", link:"world/ashley.html" },
    { id:"p03", years:8, volume:9,  title:"Interviewee 03", preview:"bg/chris2.png", link:"world/chris.html" },
    { id:"p04", years:12, volume:8,  title:"Interviewee 04", preview:"bg/daelyn2.png", link:"world/daelyn.html" },
    { id:"p05", years:10, volume:8,  title:"Interviewee 05", preview:"bg/demi2.png", link:"world/demi.html" },
    { id:"p06", years:7, volume:6,  title:"Interviewee 06", preview:"bg/di2.png", link:"world/di.html" },
    { id:"p07", years:6,  volume:4,  title:"Interviewee 07", preview:"bg/entao2.png", link:"world/entao.html" },
    { id:"p08", years:8,  volume:6,  title:"Interviewee 08", preview:"bg/erin2.png", link:"world/erin.html" },
    { id:"p09", years:21, volume:4,  title:"Interviewee 09", preview:"bg/gang2.png", link:"world/gang.html" },
    { id:"p10", years:9,  volume:4,  title:"Interviewee 10", preview:"bg/helen2.png", link:"world/helen.html" },
    { id:"p11", years:4, volume:2,  title:"Interviewee 11", preview:"bg/joe2.png", link:"world/joe.html" },
    { id:"p12", years:3, volume:4,  title:"Interviewee 12", preview:"bg/nerwen2.png", link:"world/nerwen.html" },
    { id:"p13", years:5,  volume:5,  title:"Interviewee 13", preview:"bg/tara2.png", link:"world/tara.html" },
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
  
  
  
  // init
  renderCircles();
  startBlinking();
  phraseLoop();
  
  window.addEventListener('resize', ()=>{
    renderCircles();
    startBlinking();
  });