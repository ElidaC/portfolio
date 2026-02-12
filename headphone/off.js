// =========================
    //  DATA: replace with yours
    // =========================
    const DATA = [
        {
          id:"p01",
          size:160,
          thumbGray:"bg/chris2.png",
          imgA:"bg/chris2.png",
          imgB:"bg/chris1.png",
          desc:"The moment I put on my headphones to work out, I feel instantly energized. It feels like my whole body switches on.Different kinds of music make me imagine myself training in all sorts of scenes, and it just hits perfectly, which has became my favorite part of exercising.",
          title:"Energy Boost",
          link:"world/chris.html"
        },
        // ...补到 13 个
      ];
  
      // =========================
      //  Helpers
      // =========================
      function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
      function lerp(a,b,t){ return a + (b-a)*t; }
  
      const stage = document.getElementById('stage');
      const fade = document.getElementById('fade');
  
      function go(url){
        fade.classList.add('on');
        setTimeout(()=> location.href = url, 460);
      }
  
      // =========================
      //  Cursor state
      // =========================
      const cursor = { x: window.innerWidth/2, y: window.innerHeight/2 };
      window.addEventListener('mousemove', (e)=>{ cursor.x=e.clientX; cursor.y=e.clientY; }, {passive:true});
  
      // =========================
      //  Detail (inline, no panel)
      // =========================
      const detail = document.getElementById('detail');
      const detailHit = document.getElementById('detailHit');
      const dDesc = document.getElementById('dDesc');
      const dTitleLink = document.getElementById('dTitleLink');
      const dImgA = document.getElementById('dImgA');
      const dImgB = document.getElementById('dImgB');
  
      const state = { running:true, selected:null };
  
      function openDetail(obj){
        state.running = false;
        state.selected = obj;
      
        // freeze + dim others
        bubbles.forEach(b=>{
          if(b === obj){
            b.el.style.opacity = '0';
            b.el.style.pointerEvents = 'none';
          }else{
            b.el.style.opacity = '0.28';
          }
        });
  
        // selected becomes color
        obj.el.style.filter = 'saturate(1) contrast(1.05)';
        obj.el.querySelector('img').style.filter = 'none';
  
        dDesc.textContent = obj.d.desc || '';
        dTitleLink.textContent = obj.d.title || 'Enter headphone world';
        dTitleLink.href = obj.d.link || '#';
        dImgA.src = obj.d.imgA || obj.d.thumbGray;
        dImgB.src = obj.d.imgB || obj.d.thumbGray;
  
        detail.classList.add('on');
        detail.setAttribute('aria-hidden', 'false');
      }
  
      function closeDetail(){
        detail.classList.remove('on');
        detail.setAttribute('aria-hidden', 'true');
      
        bubbles.forEach(b=>{
          b.el.style.opacity = '.92';
          b.el.style.pointerEvents = 'auto';
          b.el.style.filter = 'saturate(0) contrast(1.08)';
          b.el.querySelector('img').style.filter = 'grayscale(1) saturate(0)';
        });
      
        state.running = true;
        state.selected = null;
      }
  
      detailHit.addEventListener('click', closeDetail);
      window.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape' && detail.classList.contains('on')) closeDetail();
      });
  
      // =========================
      //  Bubbles (each follows cursor independently + breathing size)
      // =========================
      const bubbles = [];
  
      function spawn(){
        const w = window.innerWidth;
        const h = window.innerHeight;
  
        DATA.forEach((d, i)=>{
          const el = document.createElement('div');
          el.className = 'bubble';
          el.style.width = d.size + 'px';
          el.style.height = d.size + 'px';
  
          const img = document.createElement('img');
          img.src = d.thumbGray;
          img.alt = '';
          el.appendChild(img);
  
          // random initial placement (avoid slider zone)
          let x = lerp(80, w-320, Math.random());
          let y = lerp(80, h-80, Math.random());
  
          // drift velocity
          const vx = lerp(-0.20, 0.20, Math.random());
          const vy = lerp(-0.16, 0.16, Math.random());
  
          // independent cursor follow params
          const followX = lerp(12, 52, Math.random()) * (Math.random()<0.5 ? -1 : 1);
          const followY = lerp(10, 44, Math.random()) * (Math.random()<0.5 ? -1 : 1);
          const lag = lerp(0.05, 0.15, Math.random());
          const orbit = lerp(6, 20, Math.random());
          const orbitSpeed = lerp(0.008, 0.02, Math.random());
          const phase = Math.random()*Math.PI*2;
  
          // breathing: stronger + second layer (so not “fixed”)
          const base = lerp(0.92, 1.10, Math.random());
          const amp1 = lerp(0.06, 0.15, Math.random());
          const amp2 = lerp(0.02, 0.06, Math.random());
          const breathSpeed = lerp(0.75, 1.25, Math.random());
  
          let ox = 0, oy = 0;
  
          const obj = {
            d, el,
            x, y, vx, vy,
            followX, followY, lag,
            orbit, orbitSpeed,
            phase,
            base, amp1, amp2, breathSpeed,
            t: 0,
            ox, oy
          };
          bubbles.push(obj);
  
          el.style.left = x + 'px';
          el.style.top  = y + 'px';
  
          el.addEventListener('click', (e)=>{
            e.stopPropagation();
            if(!state.running) return;
            openDetail(obj);
          });
  
          stage.insertBefore(el, detail); // keep bubbles under detail layer
        });
      }
  
      function tick(){
        if(state.running){
          const w = window.innerWidth;
          const h = window.innerHeight;
  
          const nx = (cursor.x / w - 0.5);
          const ny = (cursor.y / h - 0.5);
  
          for(const b of bubbles){
            b.t += 0.012;
  
            // drift
            b.x += b.vx;
            b.y += b.vy;
  
            // wrap
            const margin = 140;
            if(b.x < -margin) b.x = w + margin;
            if(b.x > w + margin) b.x = -margin;
            if(b.y < -margin) b.y = h + margin;
            if(b.y > h + margin) b.y = -margin;
  
            // independent cursor target
            const targetOx = nx * b.followX + Math.cos(b.t*b.orbitSpeed + b.phase) * b.orbit;
            const targetOy = ny * b.followY + Math.sin(b.t*b.orbitSpeed + b.phase) * b.orbit;
  
            // inertia per bubble
            b.ox = b.ox + (targetOx - b.ox) * b.lag;
            b.oy = b.oy + (targetOy - b.oy) * b.lag;
  
            // breathing size (two-layer so always changing)
            const s =
              b.base +
              Math.sin(b.t*b.breathSpeed + b.phase) * b.amp1 +
              Math.sin(b.t*(b.breathSpeed*0.52) + b.phase*1.7) * b.amp2;
  
            // final position
            const px = b.x + b.ox;
            const py = b.y + b.oy;
  
            b.el.style.left = px + 'px';
            b.el.style.top  = py + 'px';
            b.el.style.transform = `translate(-50%,-50%) scale(${s.toFixed(3)})`;
          }
        }
  
        requestAnimationFrame(tick);
      }
  
      // click empty background closes detail (optional)
      stage.addEventListener('click', ()=>{
        if(detail.classList.contains('on')) closeDetail();
      });
  
      // =========================
      //  Slider navigation (OFF page)
      //  - release left -> on.html
      //  - release center -> map.html
      //  - release right -> stay off
      // =========================
      const track = document.getElementById('track');
      const knob  = document.getElementById('knob');
  
      let value = 0.90;
      let dragging = false;
  
      function setKnob(v){
        value = clamp(v, 0, 1);
        knob.style.left = (value * 100) + '%';
        knob.setAttribute('aria-valuenow', value.toFixed(2));
      }
      setKnob(0.92);
  
      function pointerToValue(clientX){
        const r = track.getBoundingClientRect();
        return (clientX - r.left) / r.width;
      }
  
      knob.addEventListener('pointerdown', (e)=>{
        dragging = true;
        knob.setPointerCapture(e.pointerId);
        knob.style.cursor = 'grabbing';
        e.stopPropagation();
      });
      knob.addEventListener('pointermove', (e)=>{
        if(!dragging) return;
        setKnob(pointerToValue(e.clientX));
        e.stopPropagation();
      });
      knob.addEventListener('pointerup', (e)=>{
        dragging = false;
        knob.style.cursor = 'grab';
        e.stopPropagation();
  
        if(value < 0.20){
          setKnob(0.05);
          go('on.html');
        }else if(value < 0.65){
          setKnob(0.5);
          go('map.html');
        }else{
          setKnob(0.95);
        }
      });
  
      // init
      spawn();
      requestAnimationFrame(tick);