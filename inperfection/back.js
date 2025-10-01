

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