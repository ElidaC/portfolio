// 1) 你的素材列表（保留不变）
const images = [
    "scroll-head/h1.jpeg",
    "scroll-head/h2.jpeg",
    "scroll-head/h3.jpeg",
    "scroll-head/h4.jpeg",
    "scroll-head/h5.jpeg",
    "scroll-head/h6.jpeg",
    "scroll-head/h7.jpg",
    "scroll-head/h8.mp4",
    "scroll-head/h9.jpeg",
    "scroll-head/h10.jpg",
    "scroll-head/h11.gif",
    "scroll-head/h12.jpeg",
    "scroll-head/h13.jpeg",
    "scroll-head/h14.jpg",
    "scroll-head/h15.jpg",
    "scroll-head/h16.jpg",
    "scroll-head/h17.gif",
    "scroll-head/h18.jpeg",
    "scroll-head/h19.jpg",
    "scroll-head/h20.png",
    "scroll-head/h21.png",
    "scroll-head/h22.png",
    "scroll-head/h23.png",
    "scroll-head/h24.jpeg",
    "scroll-head/h25.jpg",
    "scroll-head/h26.jpg"
  ];
  

  const META_OVERRIDES = {
    "scroll-head/h1.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/6BTuuzxJ4" },
    "scroll-head/h2.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/7CAarCGC9" },
    "scroll-head/h3.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/kKeeDupIN" },
    "scroll-head/h4.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/7k1o3uPiR" },
    "scroll-head/h5.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/nGd0wEIMx" },
    "scroll-head/h6.jpeg":  { author: "Pasieka",     year: "N/A",  source: "Pinterest", link: "https://pin.it/5fWAbqUcs" },
    "scroll-head/h7.jpg": { author: "Erich Brechbühl", year: "2005", source: "Cosmos", link: "https://www.cosmos.so/e/1136567949" },
    "scroll-head/h8.mp4":  { author: "Antonin Waterkeyn",     year: "2025",  source: "Cosmos", link: "https://www.cosmos.so/e/1909064612" },
    "scroll-head/h9.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/2hx6xN7mG" },
    "scroll-head/h10.jpg":  { author: "Unknown",     year: "N/A",  source: "Cosmos", link: "https://www.cosmos.so/e/233320617" },
    "scroll-head/h11.gif": { author: "Arina Kokoreva", year: "2024", source: "Behance", link: "https://www.behance.net/gallery/106242271/MICROMUSIC" },
    "scroll-head/h12.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/5gUXxydAl" },
    "scroll-head/h13.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/MYWLTdgGu" },
    "scroll-head/h14.jpg":  { author: "Elia Schmid",     year: "2024",  source: "Cosmos", link: "https://www.cosmos.so/e/1187465402" },
    "scroll-head/h15.jpg": { author: "Unknown", year: "N/A", source: "Cosmos", link: "https://www.cosmos.so/e/178434355" },
    "scroll-head/h16.jpg":  { author: "@zinnurxoxo",     year: "2024",  source: "Cosmos", link: "https://www.cosmos.so/e/1919586871" },
    "scroll-head/h17.gif": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/6yNdw5rkh" },
    "scroll-head/h18.jpeg":  { author: "Unknown",     year: "N/A",  source: "Pinterest", link: "https://pin.it/7sx0v3ZSo" },
    "scroll-head/h19.jpg": { author: "Wolfgang Weingart", year: "1971-1974", source: "MoMA", link: "https://www.moma.org/collection/works/86507" },
    "scroll-head/h20.png":  { author: "Wim Crouwel",     year: "1968",  source: "SFMOMA", link: "https://www.sfmoma.org/artwork/2015.658/?utm_source=chatgpt.com" },
    "scroll-head/h21.png": { author: "Vera Molnar", year: "1968-1969", source: "DAM", link: "https://dam.org/museum/artists_ui/artists/molnar-vera/interruptions/?utm_source=chatgpt.com" },
    "scroll-head/h22.png": { author: "Wade Guyton", year: "2006", source: "MoMA", link: "https://www.moma.org/calendar/galleries/5723" },
    "scroll-head/h23.png": { author: "Christopher Wool", year: "2023", source: "MoMA", link: "https://www.moma.org/collection/works/486059?classifications=any&date_begin=Pre-1850&date_end=2025&include_uncataloged_works=false&on_view=false&page=2&recent_acquisitions=false&with_images=true" },
    "scroll-head/h24.jpeg": { author: "Unknown", year: "N/A", source: "Pinterest", link: "https://pin.it/1vmUq41np" },
    "scroll-head/h25.jpg": { author: "Tereza Ruller", year: "2015", source: "Tumblr", link: "https://terezaruller.tumblr.com/post/118643675534/captured-by-success-video-for-smart-generation" },
    "scroll-head/h26.jpg": { author: "Tereza Ruller", year: "2017", source: "Tumblr", link: "https://terezaruller.tumblr.com/post/160981355889" }


};
  
  // 3) 工具函数：洗牌
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // 4) 生成对象数据
  const items = images.map(src => {
    const base = {
      src,
      author: "Unknown",
      year: "N/A",
      source: src.includes("pinterest") ? "Pinterest" : "Website",
      link: src
    };
    return Object.assign(base, META_OVERRIDES[src] || {});
  });
  
  // 5) 工具：创建媒体元素（img / video）
  function createMediaElement(src){
    const lower = src.toLowerCase();
    if (lower.endsWith(".mp4")) {
      const v = document.createElement("video");
      v.src = src;
      v.muted = true;
      v.autoplay = true;
      v.loop = true;
      v.playsInline = true;
      v.style.display = "block";
      return v;
    } else {
      const img = new Image();
      img.src = src;
      img.alt = "";
      img.style.display = "block";
      return img;
    }
  }
  
  // 6) 渲染到 .bar
  (function renderBar(){
    const bar = document.querySelector(".bar");
    if (!bar) { console.error("[bar] 容器没找到"); return; }
  
    // 安全：清空旧内容
    bar.innerHTML = "";
  
    // 生成卡片
    shuffle(items).forEach(item => {
      const card = document.createElement("div");
      card.className = "photo-card1";
  
      const wrap = document.createElement("div");
      wrap.className = "photo-wrap1";
  
      const media = createMediaElement(item.src);
      wrap.appendChild(media);
  
      const overlay = document.createElement("div");
      overlay.className = "overlay1";
      overlay.innerHTML = `
        <div>${item.author}</div>
        <div>${item.year}</div>
        <div style="height: 1em;"></div> 
        <div><a href="${item.link || item.src}" target="_blank" rel="noopener noreferrer">${item.source}</a></div>
      `;
      wrap.appendChild(overlay);
  
      card.appendChild(wwrap = wrap);
      bar.appendChild(card);
    });
  })();



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