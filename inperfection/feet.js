
const GROUPS = [
  {
    id: 1,
    memory: `<p> Back in middle school, I always thought I was short and chubby. I used to envy those tall, skinny girls who could make anything look good, until the day I fell down a staircase and somehow walked away with just a couple of scratches. I realized that maybe different bodies have their own kinds of strength.</p>`,
    items: [
      { src: "gallery/1.jpeg", author: "Erwin Wurm", year: "2025", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
      { src: "gallery/2.jpg", author: "Erwin Wurm",     year: "2022",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src: "gallery/3.jpg", author: "Erwin Wurm", year: "2024", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
      { src:  "gallery/4.jpg", author: "Erwin Wurm",     year: "2024",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src: "gallery/5.jpg", author: "Erwin Wurm", year: "2024", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src: "gallery/6.jpg", author: "Erwin Wurm",     year: "2022",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src:  "gallery/7.jpg", author: "Erwin Wurm", year: "2024", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
      { src:  "gallery/8.jpg", author: "Erwin Wurm",     year: "2021",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src: "gallery/9.jpg", author: "Erwin Wurm", year: "2020", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src:  "gallery/10.jpg", author: "Erwin Wurm",     year: "2023",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src: "gallery/11.jpg", author: "Erwin Wurm", year: "2023", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany"},
      { src:  "gallery/12.jpg", author: "Erwin Wurm",     year: "2018",  source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" },
      { src:  "gallery/13.jpg", author: "Erwin Wurm", year: "2006", source: "ErwinWurm", link: "https://www.erwinwurm.com/exhibition-views/2025/ludwig-museum-koblenz-germany" }
    ]
  },
  {
    id: 2,
    memory: `<p> People probably think I'm a weirdo. Spending days playing with “trash” and paint lol. When I was dealing with depression, I locked myself in a messy room and hardly talked to anyone. But it was during that time that I created many of the works that helped me won the gold medal and scholarship. </p>`,
    items: [
      { src: "gallery/14.jpg", author: "Viviane Sassen",     year: "2020",  source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/"},
      { src: "gallery/15.jpg", author: "Viviane Sassen", year: "2017/2020", source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/"},
      { src:  "gallery/16.jpg", author: "Viviane Sassen",     year: "2020",  source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/" },
      { src:  "gallery/17.jpg", author: "Viviane Sassen", year: "2017", source: "The Talks", link: "https://the-talks.com/interview/viviane-sassen/"}
    ]
  },
  {
    id: 3,
    memory: `<p> How can someone be creative and color-blind at the same time? No art studio wanted to teach a “disabled” kid. That's fair tho.  So I switched to architecture, and somehow my odd color choices got me into RISD. Wild. </p>`,
    items: [
      { src: "gallery/18.png", author: "René Magritte",     year: "1929",  source: "MoMA", link: "https://www.moma.org/artists/3692-rene-magritte" },
      { src:  "gallery/19.png", author: "René Magritte", year: "1966", source: "NGA", link: "https://www.nga.gov/artworks/61171-rape"},
      { src:  "gallery/20.png", author: "René Magritte",     year: "1963",  source: "NGA", link: "https://www.nga.gov/artworks/110690-bijoux-indiscrets"}
    ]
  },
  {
    id: 4,
    memory: `<p> I'm the ugliest and dumbest in the family… but hey, at least I've got personality, and I dare to take risks.</p>`,
    items: [
      { src: "gallery/21.png", author: "Guy Bourdin", year: "1977", source: "MHG", link: "https://www.michaelhoppengallery.com/artists/30-guy-bourdin/works/4740-guy-bourdin-20-ans-c.-1977/"},
      { src:  "gallery/22.png", author: "Guy Bourdin", year: "1976-1977", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin"},
      { src: "gallery/23.png", author: "Guy Bourdin", year: "1969", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
      { src:  "gallery/24.jpg", author: "Guy Bourdin", year: "1975", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin"},
      { src:  "gallery/25.jpg", author: "Guy Bourdin", year: "1975", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin" },
      { src: "gallery/26.jpg", author: "Guy Bourdin", year: "1977", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin"},
      { src:  "gallery/27.jpg", author: "Guy Bourdin", year: "1978", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin"},
      { src: "gallery/28.png", author: "Guy Bourdin",     year: "1968",  source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin"},
      { src:  "gallery/29.png", author: "Guy Bourdin", year: "N/A", source: "LAG", link: "https://www.louise-alexander.com/artist/guy-bourdin"}
    ]
  },
  {
    id: 5,
    memory: `<p>I don't understand why everyone wears black, white, and gray in middle school. Rocking colorful outfits haha, that was me and this is me. I can still wear my clothes from middle school.</p>`,
    items: [
      { src:  "gallery/30.png", author: "Maurizio & Pierpaolo",     year: "N/A",  source: "Arles", link: "https://www.rencontres-arles.com/en/expositions/view/110/maurizio-cattelan-pierpaolo-ferrari" },
      { src:  "gallery/31.png", author: "Maurizio & Pierpaolo", year: "N/A", source: "Arles", link: "https://www.rencontres-arles.com/en/expositions/view/110/maurizio-cattelan-pierpaolo-ferrari"}
    ]
  },
  {
    id: 6,
    memory: `<p> I don't talk much and I stutter, so I've never gotten a scam call in my life.
</p>`,
    items: [
      { src:  "gallery/32.jpeg", author: "John Stezaker",     year: "2018",  source: "GRAY", link: "https://www.richardgraygallery.com/artists/john-stezaker" },
      { src:  "gallery/33.jpeg", author: "John Stezaker", year: "2015", source: "GRAY", link: "https://www.richardgraygallery.com/books/john-stezaker"  },
      { src: "gallery/41.png", author: "Hassan Hajjaj", year: "N/A", source: "Artsy", link: "https://www.artsy.net/artist/hassan-hajjaj"}
    ]
  },
  { 
    id: 7,  memory: `<p>I had single eyelids for more than ten years and almost went behind my parents' backs to get double eyelid surgery. Thank god I didn't. My mom told me she and my grandma both naturally developed double lids in their twenties. FINE! I CAN WAIT... and... my left eye turned at 19, my right at 20.</p>`,  
    items: [
      { src:"gallery/34.png", author: "Hannah Höch",     year: "1930",  source: "MoMA", link: "https://www.moma.org/artists/2675-hannah-hoch"}, 
      { src:"gallery/35.jpg", author: "Hannah Höch", year: "1969", source: "Whitechapel Gallery", link: "https://www.whitechapelgallery.org/exhibitions/hannah-hoch/"}, 
      { src: "gallery/36.png", author: "Hannah Höch",     year: "1967",  source: "Studio Int", link: "https://www.studiointernational.com/index.php/hannah-hoch-assembled-worlds-review-lower-belvedere-vienna-austria" },
      { src: "gallery/37.png", author: "Hannah Höch", year: "1926", source: "Studio Int", link: "https://www.studiointernational.com/index.php/hannah-hoch-assembled-worlds-review-lower-belvedere-vienna-austria"},
      { src:  "gallery/38.png", author: "Hannah Höch",     year: "1936",  source: "Studio Int", link: "https://www.studiointernational.com/index.php/hannah-hoch-assembled-worlds-review-lower-belvedere-vienna-austria" }
    ] 
  },
  { 
    id: 8,  memory: `<p>I got betrayed by my best friend, but it's okay. After I transferred to a new school, I ended up having life-long friendships. </p>`,  
    items: [
      { src:"gallery/39.png", author: "Barbara Kruger", year: "1982", source: "MoMA", link: "https://www.moma.org/artists/3266-barbara-kruger"  }, 
      { src: "gallery/40.png", author: "David LaChapelle", year: "2007", source: "Artnet", link: "https://www.artnet.com/artists/david-lachapelle/after-the-deluge-statue-the-end-of-all-we-knew-a-Ivf9kfaAa1uq3YgmcSCang2" }, 
      { src:"gallery/42.jpeg", author: "Collier Schorr", year: "2000-2005", source: "303 Gallery", link: "https://www.303gallery.com/artists/collier-schorr/images/jens-f?view=slider#6" }
    ] 
  },
  { 
    id: 9,  memory: `<p>I'm in my fifties now, but skin is still doing fine,barely any wrinkles. I've never really learned how to do makeup or follow a skincare routine. When my friends went to beauty salons or shopping for cosmetics, I always felt a bit out of place. I didn't even worry much about aging. </p>`,  
    items: [
      { src: "gallery/54.jpeg", author: "Zhang Ahuei",     year: "N/A",  source: "Cosmos", link: "https://www.cosmos.so/e/2132409676"}
    ] 
  },
  { 
    id:10,  memory: `<p> I didn't apply to ACCD in California because I hated drawing nudes. I once felt left behinded by all my friends and relatives in Cali even it was my choice. But honestly, the opportunities here make it all worth it.</p>`, 
    items: [
      { src:"gallery/43.jpg", author: "Sølve Sundsbø", year: "N/A", source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93"}, 
      { src: "gallery/44.jpg", author: "Sølve Sundsbø",     year: "N/A",  source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93"}, 
      { src:"gallery/45.jpg", author: "Sølve Sundsbø", year: "N/A", source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93"},
      { src:  "gallery/46.jpg", author: "Sølve Sundsbø",     year: "N/A",  source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93"},
      { src:  "gallery/47.png", author: "Sølve Sundsbø", year: "N/A", source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93"},
      { src:  "gallery/48.png", author: "Sølve Sundsbø",     year: "N/A",  source: "SølveSundsbø", link: "https://www.solvesundsbo.com/numero93"}
    ] 
  },
  { 
    id:11,  memory: `<p>I've always loved putting weird things together on myself. Green hair, black lipstick, yellow blushes, what's not to like? Mama didn't understand, papa didn't understand. That's fine. Here I am! FD2027 at Parsons! </p>`, 
    items: [
      { src:"gallery/49.jpg", author: "Judy Blames", year: "N/A", source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" }, 
      { src:"gallery/50.jpg", author: "Judy Blames",     year: "N/A",  source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" }, 
      { src: "gallery/51.jpg", author: "Judy Blames", year: "N/A", source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" },
      { src: "gallery/52.jpg", author: "Judy Blames",     year: "N/A",  source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks"},
      { src: "gallery/53.jpg", author: "Judy Blames", year: "N/A", source: "Show Studio", link: "https://www.showstudio.com/projects/tumblr-takeover-judy-blame-sketchbooks/day-2-judy-blame-sketchbooks" }
    ] 
  },
  { 
    id:12,  memory: `<p>I thought that's true love and we would had a beautiful future, but I got dumped and couldn't get over it for over months. Then, I met Mr. Right, who's now my husband, while I was sulking alone by the ocean.</p>`, 
    items: [
      { src: "gallery/55.jpeg", author: "Giseok Cho", year: "N/A", source: "Cosmos", link: "https://www.cosmos.so/e/328562779" }
    ] 
  }
];



/* ====== 洗牌 ====== */
function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ====== 12 次内不重复队列 ====== */
let queue = [];
function refillQueue(){
  queue = GROUPS.map(g => g.id);
  shuffle(queue);
}
function pickNextGroup(){
  if (queue.length === 0) refillQueue();
  const id = queue.pop();
  return GROUPS.find(g => g.id === id);
}

/* ====== 媒体节点（img / video） ====== */
function createMediaElement(src){
  const lower = (src || '').toLowerCase();
  if (lower.endsWith('.mp4')) {
    const v = document.createElement('video');
    v.src = src;
    v.muted = true; v.autoplay = true; v.loop = true; v.playsInline = true;
    v.style.display = 'block';
    return v;
  }
  const img = new Image();
  img.src = src; img.alt = '';
  img.style.display = 'block';
  return img;
}

/* ====== Overlay（有 meta 才显示） ====== */
function buildOverlay1(item){
  if (item.noMeta) return null;
  const overlay = document.createElement('div');
  overlay.className = 'overlay1';
  overlay.innerHTML = `
    <div>${item.author || 'Unknown'}</div>
    <div>${item.year || 'N/A'}</div>
    <div style="height:1em;"></div>
    <div><a href="${item.link || item.src || '#'}" target="_blank" rel="noopener noreferrer">
      ${item.source || 'Website'}
    </a></div>
  `;
  return overlay;
}

/* ====== 确保 memory 容器 ====== */
function ensureMemoryHost(){
  let host = document.getElementById('memory');
  if (!host){
    host = document.createElement('div');
    host.id = 'memory';
    host.style.position   = 'fixed';
    host.style.left       = '0';
    host.style.width      = '100%';
    host.style.textAlign  = 'center';
    host.style.fontFamily = '"Fira Code", monospace';
    host.style.fontSize   = '16px';
    host.style.padding    = '10px 14px';
    host.style.zIndex     = '130';
    host.style.pointerEvents = 'none';
    document.body.appendChild(host);
  }
  return host;
}

/* —— 根据 bar 高度动态放置 memory —— */
function updateMemoryPosition(){
  const bar = document.querySelector('.bar');
  const memo = document.getElementById('memory');
  if (!bar || !memo) return;
  const h = Math.round(bar.getBoundingClientRect().height || 0);
  memo.style.bottom = (h + 14) + 'px';
}

/* ====== 渲染一组到 .bar，并在上方写 memory（随机颜色来自 :root） ====== */
function renderGroup(group){
  const bar = document.querySelector('.bar');
  if (!bar) { console.error('[bar] 容器没找到'); return; }

  const memo = ensureMemoryHost();

  // 🎨 每个单词随机颜色（用 CSS 变量）
  const palette = [
    getComputedStyle(document.documentElement).getPropertyValue("--c-a").trim(),
    getComputedStyle(document.documentElement).getPropertyValue("--c-b").trim(),
    getComputedStyle(document.documentElement).getPropertyValue("--c-c").trim(),
    getComputedStyle(document.documentElement).getPropertyValue("--c-d").trim(),
    getComputedStyle(document.documentElement).getPropertyValue("--c-e").trim(),
  ];

  function colorizeText(html){
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    function walk(node){
      if(node.nodeType === 3){
        const words = node.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        words.forEach(w => {
          if(/\s+/.test(w)){
            frag.appendChild(document.createTextNode(w));
          } else {
            const span = document.createElement("span");
            span.textContent = w;
            span.style.color = palette[Math.floor(Math.random()*palette.length)];
            frag.appendChild(span);
          }
        });
        node.parentNode.replaceChild(frag, node);
      } else if(node.nodeType === 1){
        [...node.childNodes].forEach(walk);
      }
    }
    walk(tmp);
    return tmp.innerHTML;
  }

  memo.innerHTML = colorizeText(group.memory || '');
  updateMemoryPosition();

  bar.innerHTML = '';
  const imgs = shuffle([...group.items]);

  imgs.forEach(item => {
    const card = document.createElement('div');
    card.className = 'photo-card1';

    const wrap = document.createElement('div');
    wrap.className = 'photo-wrap1';

    const media = createMediaElement(item.src);
    wrap.appendChild(media);

    const overlay = buildOverlay1(item);
    if (overlay) wrap.appendChild(overlay);

    card.appendChild(wrap);
    bar.appendChild(card);
  });

  bar.scrollTo({ left: 0, behavior: 'smooth' });
}

/* ====== 入口 ====== */
window.addEventListener('DOMContentLoaded', () => {
  refillQueue();
  window.addEventListener('resize', updateMemoryPosition);

  const btn = document.getElementById('shuffleBtn');
  if (btn) btn.addEventListener('click', () => {
    const g = pickNextGroup();
    renderGroup(g);
  });

  renderGroup(pickNextGroup());
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