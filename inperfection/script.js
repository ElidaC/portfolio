// 生成“错误感”的随机代码背景
(function makeCodeBackground () {
    const root = document.getElementById('bg');
    const palette = ['var(--c-a)','var(--c-b)','var(--c-c)','var(--c-d)','var(--c-e)'];
  
    // 用一组“看起来像代码”的字符集合；包含一些错别字符制造 glitch
    const TOKENS = [
      // 常见代码符号
      ..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      ..."(){}[]<>;:,.=+-*/!&|^%?_#@$",
      // 空格与缩进
      ..."     ",
    ];
    const GLITCHES = ['¿', '§', 'Ø', '¶', '∆', '‚', '•', '≈', '«', '»', '¤'];
  
    function randomToken(i) {
      // 10% 概率注入“错误”字符
      if (Math.random() < 0.10) return GLITCHES[i % GLITCHES.length];
      // 其余从常规集合中取
      return TOKENS[Math.floor(Math.random() * TOKENS.length)];
    }
  
    function makeSpan(char, i, cols) {
      const span = document.createElement('span');
      span.className = 'bit';
      span.textContent = char;
      // 随机从调色板选择颜色，且有随机透明
      const c = palette[Math.floor(Math.random() * palette.length)];
      span.style.color = c;
      span.style.opacity = (Math.random()*0.5 + parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bit-alpha'))).toFixed(2);
      return span;
    }
  
    function populate(){
      const charWidth = 14;                 // 和 CSS --bit-size 对齐
      const cols = Math.ceil(window.innerWidth / charWidth);
      const rows = Math.ceil(window.innerHeight / 18) + 12; // 额外几行，滚动时也满
      const total = cols * rows;
  
      // 为了更“像代码”，每行前面随机空格缩进，偶尔插入 // 注释 或 'function' 片段
      let htmlFrag = document.createDocumentFragment();
      root.innerHTML = '';
  
      for (let r = 0; r < rows; r++) {
        let indent = ' '.repeat(Math.floor(Math.random()*8));
        const special =
          Math.random() < 0.08 ? '// TODO: fix me' :
          (Math.random() < 0.06 ? 'function ' : '');
  
        const line = (indent + special).padEnd(Math.floor(cols*0.2), ' ');
        const lineChars = line.split('');
  
        // 先放置行前缀
        for (let i = 0; i < lineChars.length; i++) {
          htmlFrag.appendChild(makeSpan(lineChars[i], r*cols + i, cols));
        }
        // 再填满这一行剩余字符
        for (let c = lineChars.length; c < cols; c++) {
          const ch = randomToken(r*cols + c);
          htmlFrag.appendChild(makeSpan(ch, r*cols + c, cols));
        }
      }
      root.appendChild(htmlFrag);
    }
  
    populate();
    // 视口变化时重建（简易节流）
    addEventListener('resize', () => {
      clearTimeout(makeCodeBackground._t);
      makeCodeBackground._t = setTimeout(populate, 120);
    });
  
    // 轻微自动“刷新”局部字符，制造活感
    setInterval(() => {
      const bits = root.querySelectorAll('.bit');
      if (!bits.length) return;
      for (let k = 0; k < 40; k++) {
        const idx = Math.floor(Math.random() * bits.length);
        const el = bits[idx];
        el.textContent = randomToken(idx);
      }
    }, 900);
  })();

