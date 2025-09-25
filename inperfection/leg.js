// 1) 你的素材列表（保留不变）
const images = [
    "paper/1.png",
    "paper/2.jpeg",
    "paper/3.png",
    "paper/4.jpeg",
    "paper/5.png",
    "paper/6.jpeg",
    "paper/7.jpg",
    "paper/8.jpg",
    "paper/9.jpg",
    "paper/10.jpg",
    "paper/11.jpg",
    "paper/12.jpg",
    "paper/13.jpeg",
    "paper/14.jpeg",
    "paper/15.jpg",
    "paper/16.jpg",
    "paper/17.jpg",
    "paper/18.png",
    "paper/19.png",
    "paper/20.png",
    "paper/21.png",
    "paper/22.jpg",
    "paper/23.jpg",
    "paper/24.jpg",
    "paper/25.jpg",
    "paper/26.png",
    "paper/27.png",
    "paper/28.png",
    "paper/29.jpg",
    "paper/30.jpg",
    "paper/31.jpg",
    "paper/32.jpg",
    "paper/33.jpg",
    "paper/34.jpg",
    "paper/35.jpg",
    "paper/36.jpg",
    "paper/37.jpg",
    "paper/38.jpg",
    "paper/39.jpg",
    "paper/40.png"
  ];
  

  const META_OVERRIDES = {
    "paper/1.png": { author: "Simone Forti", year: "2020", source: "MoMA", link: "https://www.moma.org/collection/works/435179?classifications=any&date_begin=Pre-1850&date_end=2025&include_uncataloged_works=false&on_view=false&page=10&recent_acquisitions=false&with_images=true" },
    "paper/2.jpeg":  { author: "Pat O'Neill",     year: "2008",  source: "WalkerArt", link: "https://walkerart.org/collections/artworks/horizontal-boundaries" },
    "paper/3.png": { author: "Charline von Heyl", year: "2019", source: "MoMA", link: "https://www.moma.org/collection/works/404610?classifications=any&date_begin=Pre-1850&date_end=2025&include_uncataloged_works=false&on_view=false&page=20&recent_acquisitions=false&with_images=true" },
    "paper/4.jpeg":  { author: "Peter Bundy",     year: "N/A",  source: "WalkerArt", link: "https://walkerart.org/collections/artworks/composition-321" },
    "paper/5.png": { author: "Frederick Sommer", year: "1987", source: "MoMA", link: "https://www.moma.org/collection/works/125023" },
    "paper/6.jpeg":  { author: "James Richards",     year: "2015",  source: "Radio at Night", link: "https://walkerart.org/collections/artworks/radio-at-night" },
    "paper/7.jpg": { author: "Marco Breuer", year: "2012", source: "SFMOMA", link: "https://www.sfmoma.org/artwork/2013.137/" },
    "paper/8.jpg":  { author: "Marco Breuer",     year: "2004",  source: "SFMOMA", link: "https://www.sfmoma.org/artwork/2005.201/" },
    "paper/9.jpg": { author: "Marco Breuer", year: "2013", source: "Pier24", link: "https://pier24.org/lecture/marco-breuer-3/" },
    "paper/10.jpg":  { author: "Marco Breuer",     year: "2016",  source: "Yossi Milo", link: "https://yossimilo.com/artists/55-marco-breuer/works/15858-marco-breuer-untitled-c-1784-2016/" },
    "paper/11.jpg": { author: "Marco Breuer", year: "2001", source: "Yossi Milo", link: "https://yossimilo.com/artists/55-marco-breuer/works/11624-marco-breuer-untitled-heat-gun-7-2001/" },
    "paper/12.jpg":  { author: "Marco Breuer",     year: "2012",  source: "Yossi Milo", link: "https://yossimilo.com/artists/55-marco-breuer/works/11612-marco-breuer-untitled-c-1221-2012/" },
    "paper/13.jpeg": { author: "Walead Beshty", year: "2014", source: "Petzel", link: "https://www.petzel.com/exhibitions/walead-beshty3/selected-works?view=slider#1" },
    "paper/14.jpeg":  { author: "Barbara Kasten",     year: "2022",  source: "BarbaraKasten", link: "https://barbarakasten.net/plan/#4" },
    "paper/15.jpg": { author: "Barbara Kasten", year: "2022", source: "BarbaraKasten", link: "https://barbarakasten.net/shield/#1" },
    "paper/16.jpg":  { author: "Barbara Kasten",     year: "2021",  source: "BarbaraKasten", link: "https://barbarakasten.net/variation/#1" },
    "paper/17.jpg": { author: "Barbara Kasten", year: "2014", source: "BarbaraKasten", link: "https://barbarakasten.net/transposition/#7" },
    "paper/18.png":  { author: "Aaron Siskind",     year: "1972",  source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/providence-a-HED-Y1cUwZGPbkoyTdhjkA2" },
    "paper/19.png": { author: "Aaron Siskind", year: "1952", source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/untitled-a-EK14-dK2x-Fu0Z8Vn-1fXA2" },
    "paper/20.png":  { author: "Aaron Siskind",     year: "1949",  source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/jerome-21-arizona-a-3deqx0W6BLUEGVnqpABRcw2" },
    "paper/21.png": { author: "Aaron Siskind", year: "1991", source: "Artnet", link: "https://www.artnet.com/artists/aaron-siskind/lima-59-a-LgvKGtpwJ2QSNtBu50YDtw2" },
    "paper/22.jpg": { author: " Kurt Schwitters", year: "1923", source: "Tate", link: "https://www.tate.org.uk/art/artworks/schwitters-aphorism-t12393" },
    "paper/23.jpg": { author: "El Anatsui", year: "1923", source: "October Gallery", link: "https://octobergallery.co.uk/exhibitions/el-anatsui-timespace" },
    "paper/24.jpg": { author: "El Anatsui", year: "2023", source: "October Gallery", link: "https://octobergallery.co.uk/exhibitions/el-anatsui-timespace" },
    "paper/25.jpg": { author: "Tara Donovan", year: "2020", source: "Pace", link: "https://www.pacegallery.com/exhibitions/tara-donovan-intermediaries/" },
    "paper/26.png": { author: "Tara Donovan", year: "2003", source: "Rice Gallery", link: "https://www.ricegallery.org/tara-donovan" },
    "paper/27.png": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4025779-%27%20Trevi%20%20I%20%27.html" },
    "paper/28.png":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4239311-%27%20Bar%20Code%20Red%20%27.html" },
    "paper/29.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/961248-%27%20Duet%20%27.html" },
    "paper/30.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/961241-%27%20Lasting%20Impression%20%27.html" },
    "paper/31.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/974214-%27%20Woody%20%27.html" },
    "paper/32.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4414579-%27%20Hidden%20Message%20%27.html" },
    "paper/33.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4025781-%27%20Arsenale%20%27.html" },
    "paper/34.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4239305-%27%20One%20Red%20%27.html" },
    "paper/35.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4634771-%27%20Head%20Over%20Heels%20%27%20.html" },
    "paper/36.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4189813-%27%20Wanting%20%27.html" },
    "paper/37.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/2346738-%27%20Fragments%20%27.html" },
    "paper/38.jpg":  { author: "Gillian Lindsay",     year: "N/A",  source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4289426-%27%20Uninhibited%20%27.html" },
    "paper/39.jpg": { author: "Gillian Lindsay", year: "N/A", source: "GillianLindsay", link: "https://gillianlindsay.ca/artwork/4034047-%27%20Escape%20%27.html" },
    "paper/40.png": { author: "Atsuko Tanaka", year: "1956", source: "MoMA", link: "https://www.moma.org/calendar/exhibitions/1056" }
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