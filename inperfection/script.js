// === 随机代码背景 + 文本模式 ===
(function makeCodeBackground () {
  const root = document.getElementById('bg');
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
  let mode = 'random'; // 'random' | 'text'

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
    const charWidth = 14;
    const cols = Math.ceil(window.innerWidth / charWidth);
    const rows = Math.ceil(window.innerHeight / 18) + 12;

    const htmlFrag = document.createDocumentFragment();
    root.innerHTML = '';

    for (let r = 0; r < rows; r++) {
      let indent = ' '.repeat(Math.floor(Math.random()*8));
      const special =
        Math.random() < 0.08 ? '// TODO: fix me' :
        (Math.random() < 0.06 ? 'function ' : '');

      const line = (indent + special).padEnd(Math.floor(cols*0.2), ' ');
      const lineChars = line.split('');

      for (let i = 0; i < lineChars.length; i++) {
        htmlFrag.appendChild(makeSpan(lineChars[i], r*cols + i, cols));
      }
      for (let c = lineChars.length; c < cols; c++) {
        const ch = randomToken(r*cols + c);
        htmlFrag.appendChild(makeSpan(ch, r*cols + c, cols));
      }
    }
    root.appendChild(htmlFrag);
  }

  function startRandom() {
    mode = 'random';
    root.classList.remove('is-text');
    root.classList.add('is-random');
    root.innerHTML = '';
    populate();

    // resize
    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);

    // ticker
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

  function onResize(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (mode === 'random') populate();
    }, 120);
  }

  function stopTicker(){
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
  }


  function showText(textHTML){
    mode = 'text';
    stopTicker();
    window.removeEventListener('resize', onResize);
    root.classList.remove('is-random');
    root.classList.add('is-text');
  
    // 颜色池（用你的 6 个颜色）
    const paletteCssVars = ['var(--c-a)','var(--c-b)','var(--c-c)','var(--c-d)','var(--c-e)']; 
    // 用 #DEDEDE 作为 --c-bg，若你没设置过 --c-bg，请在 :root 有定义
  
    // 把文字按“词”上色，保留 p/br 等结构
    const tmp = document.createElement('div');
    tmp.innerHTML = textHTML;
  
    function colorizeTextNode(node){
      const text = node.nodeValue;
      // 用空白分割，保留空白（用捕获组）
      const parts = text.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach(part => {
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
        } else if (part.length) {
          const span = document.createElement('span');
          const c = paletteCssVars[Math.floor(Math.random()*paletteCssVars.length)];
          span.textContent = part;
          span.style.color = c;
          // 稍微降低一点饱和/强度：用透明度做柔化
          span.style.opacity = '0.9';
          frag.appendChild(span);
        }
      });
      node.replaceWith(frag);
    }
  
    // 深度遍历，把所有文本节点上色
    (function walk(node){
      if (node.nodeType === Node.TEXT_NODE) {
        colorizeTextNode(node);
        return;
      }
      // 只保留常见安全标签，其它当纯文本处理
      const SAFE = new Set(['P','BR','EM','STRONG','SPAN','DIV']);
      if (node.nodeType === Node.ELEMENT_NODE && !SAFE.has(node.tagName)) {
        // 把不安全标签的文本内容整体上色
        const text = node.textContent || '';
        const tn = document.createTextNode(text);
        node.replaceWith(tn);
        colorizeTextNode(tn);
        return;
      }
      let child = node.firstChild;
      while (child) {
        const next = child.nextSibling;
        walk(child);
        child = next;
      }
    })(tmp);
  
    // 渲染
    root.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'bg-text';
    box.append(...tmp.childNodes);
    root.appendChild(box);
  }

  // 初始进入随机代码模式
  startRandom();

  // 暴露全局控制
  window.CodeBG = {
    showRandom: startRandom,        // 恢复随机代码
    showText,                       // 切换到文本
    isTextMode: () => mode === 'text'
  };
})();


// === 每张图片对应的背景文本 ===
const BG_TEXTS = {
  'head.html': `
    <p>The mind is where anxiety gathers. Here you will find self-questioning, the endless cycle of chasing perfection, and streams of code that flicker like restless thoughts. Why does digital anxiety stay with us? Are programs ever truly flawless? Beyond order and rules, could there be another kind of beauty?</p>
  `,
  'arm.html': `
    <p>This is an open archive. Works are layered with time, names sit alongside memories. You can trace by date or browse by artist. Everything extends outward like growing branches.</p>
  `,
  'back.html': `
    <p>Imperfection is not failure but another form. AI seems faster, sharper, closer to perfect. Yet because of that, human hesitation and flaws feel more real. A crack can be an entrance, and a mistake can open possibility. Searching for beauty within imperfection is where this project begins.</p>
  `,
  'chest.html': `
    <p>The lens and the algorithm create an “ideal body,” amplifying anxiety about looks and shape. Female artists are working to step outside the male gaze and show the body as imperfect but real. Here, traits once labeled as flaws can be seen differently. Each difference is its own kind of perfection.</p>
  `,
  'leg.html': `
    <p>Creation often carries broken marks: torn paper edges, unfinished sketches, dripping ink. They seem imperfect but often become the highlight, shaping the reality around us every day. A flaw does not always mean regret. Sometimes it is the beginning of beauty.</p>
  `,
  'hand.html': `
    <p>Lines of the human body meet the shapes of abstraction. Abstract art is not always easy to understand, yet beauty often resonates across different fields. Through rotation, zooming in and out, photography and abstraction overlap, creating unexpected harmony in their blurred edges.</p>
  `,
  'feet.html':`
  <p>A person can live in many identities and forms. There is no single perfect human and no single perfect standard of beauty. Someone's abnormal is another person's normal. Many memories that once felt like mistakes later reveal themselves as the most perfect arrangements. Here are their stories...</p>
  `
};


// === 绑定 hover 切换 ===
(function bindBlobHoverToBG(){
  const blobs = document.querySelectorAll('.blobs .blob');

  blobs.forEach(a => {
    const href = a.getAttribute('href') || '';
    let key = '';
    try {
      const url = new URL(href, location.href);
      key = url.pathname.split('/').pop();
    } catch { key = href; }

    const text = BG_TEXTS[key];
    if (!text) return; // 没配置就忽略

    a.addEventListener('mouseenter', () => {
      if (window.CodeBG) window.CodeBG.showText(text);
    });
    a.addEventListener('mouseleave', () => {
      if (window.CodeBG) window.CodeBG.showRandom();
    });

    // 触屏/笔设备兜底
    a.addEventListener('pointerenter', () => {
      if (window.CodeBG) window.CodeBG.showText(text);
    });
    a.addEventListener('pointerleave', () => {
      if (window.CodeBG) window.CodeBG.showRandom();
    });
  });
})();

