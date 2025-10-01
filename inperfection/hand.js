/* ====== 6 组素材（每组 3 张 + 元数据） ====== */
const GROUPS = [
 {
   id: 1,
   items: [
     { src: "drag/1c.jpeg", author: "Kelly Wearstler",  year: "N/A", source: "WearstlerWorld",   link: "https://www.kellywearstler.com/art_sculpture/volute-sculpture/HBR41C130L.html?epik=dj0yJnU9N0R0Nmc0a2JqVnpJWkR5THB1TENZaHI4b3loME1PRm0mcD0wJm49WHAzSF9pUFpzSG9jZWoyaklGb0w4QSZ0PUFBQUFBR2pUVVRr" },
     { src: "drag/1b.png", noMeta: true }, 
     { src: "drag/1a.jpeg", author: "Unknown",  year: "N/A", source: "Pinterest",   link: "https://pin.it/407PYHNmE" }
   ]
 },
 { id: 2,
   items: [
     { src: "drag/2c.png",  author: "Unknown", year: "N/A",  source: "Tubler",  link: "https://peppermintgreenapple.tumblr.com/post/181042949460" },
     { src: "drag/2b.png",  noMeta: true },
     { src: "drag/2a.jpeg", author: "Jesse Draxler",  year: "2023", source: "Cosmos",  link: "https://www.cosmos.so/e/650278401" }
   ]
 },
 { id: 3,
   items: [
     { src: "drag/3c.jpg",  author: "Vanessa da Silva", year: "2017",  source: "Cosmos", link: "https://www.cosmos.so/e/576467961" },
     { src: "drag/3b.png",   noMeta: true },
     { src: "drag/3a.jpeg", author: "Unknown",  year: "N/A", source: "Pinterest",   link: "https://pin.it/7MK2ZkAdw" }
   ]
 },
 { id: 4,
   items: [
     { src: "drag/4c.png",  author: "Henri Michaux",  year: "1970", source: "Galerie",   link: "https://www.galerie-nothelfer.de/en/artist/14-henri-michaux" },
     { src: "drag/4b.png",  noMeta: true },
     { src: "drag/4a.jpeg", author: "Lois Greenfield",  year: "2008", source: "Artsy",   link: "https://www.artsy.net/artwork/lois-greenfield-sara-joel-and-anna-venizelos" }
   ]
 },
 { id: 5,
   items: [
     { src: "drag/5c.png",  author: "Mathias Bengtsson", year: "2016",  source: "DesignMiami", link: "https://shop.designmiami.com/blogs/news/mathias-bengtsson-on-21st-century-design" },
     { src: "drag/5b.png",  noMeta: true },
     { src: "drag/5a.jpg",  author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/2O0Enp2PT" }
   ]
 },
 { id: 6,
   items: [
     { src: "drag/6c.png",  author: "Brice Marden", year: "1996",  source: "WMAA", link: "https://whitney.org/collection/works/11024" },
     { src: "drag/6b.png",  noMeta: true },
     { src: "drag/6a.jpeg", author: "Unknown",  year: "N/A", source: "Pinterest",   link: "https://pin.it/4nCqrGRhb" }
   ]
 },
];
/* ====== 随机顺序队列：保证 6 次内不重复 ====== */
let queue = [];
function refillQueue(arr) {
  queue = [...arr];
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
}
function pickOne(arr) {
  if (queue.length === 0) refillQueue(arr);
  return queue.pop();
}

/* ====== 渲染一组（3 张，可拖拽 + 丝滑旋转 + overlay/可选隐藏） ====== */
function renderOne(){
  const mount = document.getElementById('stack-one');
  if (!mount) return;
  mount.innerHTML = '';

  const group = pickOne(GROUPS);

  // 初始三张位置（可按需要微调）
  const centers = [
    { left: '22%', top: '20%', cls: 'layer-back'  },
    { left: '36%', top: '24%', cls: 'layer-mid'   },
    { left: '50%', top: '28%', cls: 'layer-front' }
  ];

  group.items.forEach((item, idx) => {
    const wrap = document.createElement('div');
    wrap.className = `draggable ${centers[idx].cls}`;
    wrap.style.left = centers[idx].left;
    wrap.style.top  = centers[idx].top;

    // 交互旋转变量
    wrap.dataset.rotTarget = "0";  // 目标角度（度）
    wrap.dataset.rotCur    = "0";  // 当前角度（度），用于丝滑过渡
    wrap.style.setProperty('--rot', '0deg');

    // 图片 + overlay（手绘 noMeta: true 则不显示 overlay）
    if (item.noMeta) {
      wrap.innerHTML = `
        <div class="photo-wrap">
          <img src="${item.src}" alt="">
        </div>
      `;
    } else {
      wrap.innerHTML = `
        <div class="photo-wrap">
          <img src="${item.src}" alt="">
          <div class="overlay">
            <div>${item.author}</div>
            <div>${item.year}</div>
            <div style="height: 1em;"></div>
            <div>
              <a class="source-link" href="${item.link}" target="_blank" rel="noopener noreferrer">
                ${item.source}
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // 旋转手柄（右上角）
    const rotateHandle = document.createElement('div');
    rotateHandle.className = 'ctrl-handle ctrl-rotate';
    wrap.appendChild(rotateHandle);

    // 双击进入详情页
    wrap.addEventListener('dblclick', () => {
      const href = group.href || (`next.html?g=${group.id}`);
      window.location.href = href;
    });

    mount.appendChild(wrap);

    // 交互
    bindSmoothRotation(wrap, rotateHandle);
  });

  enableDragging(mount);
}

/* ====== 拖拽（鼠标/触摸） ====== */
function enableDragging(container){
  const els = container.querySelectorAll('.draggable');

  els.forEach(el => {
    let startX=0, startY=0, origX=0, origY=0, dragging=false;

    const onDown = (e) => {
      if (e.target.closest('a')) return; // 不抢 Source 链接
      if (e.target.classList.contains('ctrl-rotate')) return; // 旋转手柄单独处理
      dragging = true;
      el.style.transition = 'none';
      const rect = el.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      startX = (e.touches ? e.touches[0].clientX : e.clientX);
      startY = (e.touches ? e.touches[0].clientY : e.clientY);
      origX = rect.left - cRect.left;
      origY = rect.top  - cRect.top;
      el.style.left = origX + 'px';
      el.style.top  = origY + 'px';
      el.style.right = 'auto'; el.style.bottom = 'auto';
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onMove, {passive:false});
      document.addEventListener('touchend', onUp);
    };

    const onMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      const x = (e.touches ? e.touches[0].clientX : e.clientX);
      const y = (e.touches ? e.touches[0].clientY : e.clientY);
      const dx = x - startX;
      const dy = y - startY;
      el.style.left = (origX + dx) + 'px';
      el.style.top  = (origY + dy) + 'px';
    };

    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      el.style.transition = ''; // 恢复
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    };

    el.addEventListener('mousedown', onDown);
    el.addEventListener('touchstart', onDown, {passive:true});
  });
}

/* ====== 丝滑旋转（rAF 缓动到目标角度） ====== */
function getCenter(el){
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width/2, y: r.top + r.height/2 };
}
function getPoint(e){
  if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  return { x: e.clientX, y: e.clientY };
}
/** 绑定旋转：右上角手柄，按住拖动改变目标角度；内部 rAF 平滑追随 */
function bindSmoothRotation(el, handle){
    let startAngle = 0, startRotTarget = 0, dragging = false;
    let animId = null;
  
    // 启动/维持缓动动画
    function startAnim(){
      if (animId) return;
      const tick = () => {
        const cur = parseFloat(el.dataset.rotCur || "0");
        const target = parseFloat(el.dataset.rotTarget || "0");
        const next = cur + (target - cur) * 0.18;  // 丝滑系数（0.15~0.25）
        el.dataset.rotCur = next.toFixed(3);
        el.style.setProperty('--rot', next.toFixed(3) + 'deg');
        if (dragging || Math.abs(target - next) > 0.05) {
          animId = requestAnimationFrame(tick);
        } else {
          animId = null;
        }
      };
      animId = requestAnimationFrame(tick);
    }
  
    // 提到最上层，避免被其他图盖住
    function bringToFront(node){
      const parent = node.parentElement;
      let maxZ = 0;
      parent.querySelectorAll('.draggable').forEach(n=>{
        const z = parseInt(getComputedStyle(n).zIndex || 0, 10);
        if (!Number.isNaN(z)) maxZ = Math.max(maxZ, z);
      });
      node.style.zIndex = String(maxZ + 1);
    }
  
    const onDown = (e) => {
      e.preventDefault();
      dragging = true;
      bringToFront(el);
      el.classList.add('transforming');
  
      const center = getCenter(el);
      const p = getPoint(e);
      startAngle = Math.atan2(p.y - center.y, p.x - center.x);
      startRotTarget = parseFloat(el.dataset.rotTarget || "0");
  
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onMove, {passive:false});
      window.addEventListener('touchend', onUp);
  
      startAnim();
    };
  
    const onMove = (e) => {
      if(!dragging) return;
      e.preventDefault();
      const center = getCenter(el);
      const p = getPoint(e);
      const a = Math.atan2(p.y - center.y, p.x - center.x);
      const deltaDeg = (a - startAngle) * 180 / Math.PI;
      const target = startRotTarget + deltaDeg;
      el.dataset.rotTarget = target.toFixed(3);   // 只改目标角度，动画去追
    };
  
    const onUp = () => {
      dragging = false;
      el.classList.remove('transforming');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  
    handle.addEventListener('mousedown', onDown);
    handle.addEventListener('touchstart', onDown, {passive:false});
  }
  
  /* ====== 初始化 ====== */
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('shuffleBtn');
    if (btn) btn.addEventListener('click', renderOne);
    renderOne();
  });









  // === 只保留随机代码背景 (挂载到 #webpg) ===
(function makeCodeBackground () {
  const root = document.getElementById('webpg');  // << 目标容器
  if (!root) return;

  const palette = ['var(--c-a)','var(--c-b)','var(--c-c)','var(--c-d)','var(--c-e)'];
  const TOKENS = [
    ..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    ..."(){}[]<>;:,.=+-*/!&|^%?_#@$",
    ..."     ",
  ];
  const GLITCHES = ['¿', '§', 'Ø', '¶', '∆', '‚', '•', '≈', '«', '»', '¤'];

  let intervalId = null;
  let resizeTimer = null;

  function randomToken(i) {
    if (Math.random() < 0.10) return GLITCHES[i % GLITCHES.length];
    return TOKENS[Math.floor(Math.random() * TOKENS.length)];
  }

  function makeSpan(char, i, cols) {
    const span = document.createElement('span');
    span.className = 'bit';
    span.textContent = char;
    const c = palette[Math.floor(Math.random() * palette.length)];
    span.style.color = c;
    span.style.opacity = (
      Math.random()*0.5 + parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bit-alpha'))
    ).toFixed(2);
    return span;
  }

  function populate(){
    const bitSizeVar = getComputedStyle(document.documentElement).getPropertyValue('--bit-size').trim();
    const bitSize = parseInt(bitSizeVar || '14', 10) || 14;

    const charWidth  = bitSize;
    const charHeight = Math.round(bitSize * 1.25);

    const w = Math.max(1, Math.floor(root.clientWidth));
    const h = Math.max(1, Math.floor(root.clientHeight));
    const cols = Math.ceil(w / Math.max(8, charWidth));
    const rows = Math.ceil(h / Math.max(8, charHeight)) + 2;

    const htmlFrag = document.createDocumentFragment();
    root.innerHTML = '';

    for (let r = 0; r < rows; r++) {
      let indent = ' '.repeat(Math.floor(Math.random()*8));
      const special =
        Math.random() < 0.08 ? '// TODO: fix me' :
        (Math.random() < 0.06 ? 'function ' : '');

      const prefixLen = Math.floor(cols * 0.2);
      const line = (indent + special).padEnd(prefixLen, ' ');
      const lineChars = line.split('');

      for (let i = 0; i < lineChars.length && i < cols; i++) {
        htmlFrag.appendChild(makeSpan(lineChars[i], r*cols + i, cols));
      }
      for (let c = lineChars.length; c < cols; c++) {
        const ch = randomToken(r*cols + c);
        htmlFrag.appendChild(makeSpan(ch, r*cols + c, cols));
      }
    }
    root.appendChild(htmlFrag);
  }

  function onResize(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      populate();
    }, 120);
  }

  function stopTicker(){
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
  }

  function startRandom() {
    root.classList.add('is-random');
    root.innerHTML = '';
    populate();

    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);

    stopTicker();
    intervalId = setInterval(() => {
      const bits = root.querySelectorAll('.bit');
      if (!bits.length) return;
      for (let k = 0; k < 40; k++) {
        const idx = Math.floor(Math.random() * bits.length);
        const el = bits[idx];
        el.textContent = randomToken(idx);
      }
    }, 900);
  }

  // 初始进入随机代码模式
  startRandom();

  // 暴露全局控制
  window.WebPG = {
    showRandom: startRandom,
    isRandom: () => true
  };
})();