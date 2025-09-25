// 1) 你的素材列表（保留不变）
const images = [
    "body/1.png",
    "body/2.png",
    "body/3.png",
    "body/4.png",
    "body/5.png",
    "body/6.png",
    "body/7.png",
    "body/8.png",
    "body/9.png",
    "body/10.png",
    "body/11.jpg",
    "body/12.png",
    "body/13.png",
    "body/14.png",
    "body/15.png",
    "body/16.png",
    "body/17.png",
    "body/18.png",
    "body/19.png",
    "body/20.png",
    "body/21.jpg",
    "body/22.jpg",
    "body/23.jpg"
  ];
  

  const META_OVERRIDES = {
    "body/1.png": { author: "Jenny Saville", year: "2016", source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/2.png":  { author: "Jenny Saville",     year: "1998-1999",  source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/3.png": { author: "Jenny Saville", year: "1998-1999", source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/4.png":  { author: "Jenny Saville",     year: "1993-1994",  source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/5.png": { author: "Jenny Saville", year: "1992", source: "Gagosian", link: "https://gagosian.com/artists/jenny-saville/" },
    "body/6.png":  { author: "Bailey Doogan",     year: "2002",  source: "BaileyDoogan", link: "https://www.baileydoogan.com/artist/index.html" },
    "body/7.png": { author: "Louise Bourgeois", year: "2005", source: "WMAA", link: "https://whitney.org/collection/works/27789" },
    "body/8.png":  { author: "Louise Bourgeois",     year: "2003/2008",  source: "WMAA", link: "https://whitney.org/collection/works/34551" },
    "body/9.png": { author: "Louise Bourgeois", year: "1986", source: "Artist Room", link: "https://www.artistrooms.org/sites/default/files/downloads/LouiseBourgeoisLearningResource.pdf" },
    "body/10.png":  { author: "Martin H Loftus",     year: "N/A",  source: "MHL", link: "https://martin-h-loftus.format.com/2421998-sculpture-student-work#38" },
    "body/11.jpg": { author: "Gianluca Traina", year: "2013", source: "gianlucatraina", link: "https://gianlucatraina.com/2013/10/19/portrait-360-unportrait-tokyo-designers-week-asia-awards/" },
    "body/12.png":  { author: "Gianluca Traina",     year: "2024",  source: "gianlucatraina", link: "https://gianlucatraina.com/ex-maquina/" },
    "body/13.png": { author: "Gianluca Traina", year: "2024", source: "gianlucatraina", link: "https://gianlucatraina.com/posthuman-selection/" },
    "body/14.png":  { author: "Gianluca Traina",     year: "2024",  source: "gianlucatraina", link: "https://gianlucatraina.com/posthuman-selection/" },
    "body/15.png": { author: "Gianluca Traina", year: "2024", source: "gianlucatraina", link: "https://gianlucatraina.com/posthuman-selection/" },
    "body/16.png":  { author: "Gianluca Traina",     year: "2024",  source: "gianlucatraina", link: "https://gianlucatraina.com/home/unportrait-ai/" },
    "body/17.png": { author: "Gianluca Traina", year: "2020", source: "gianlucatraina", link: "https://gianlucatraina.com/2020/11/07/mosaics-360/" },
    "body/18.png":  { author: "Gianluca Traina",     year: "N/A",  source: "gianlucatraina", link: "https://gianlucatraina.com/corpo-360/" },
    "body/19.png": { author: "Gianluca Traina", year: "2017", source: "gianlucatraina", link: "https://gianlucatraina.com/portrait-360__trashed/madeinchina/" },
    "body/20.png":  { author: "Gianluca Traina",     year: "N/A",  source: "gianlucatraina", link: "https://gianlucatraina.com/portrait-360__trashed/portrait-360/" },
    "body/21.jpg": { author: "Gianluca Traina", year: "N/A", source: "gianlucatraina", link: "https://gianlucatraina.com/portrait-360__trashed/portrait-360/" },
    "body/22.jpg": { author: "Lucian Freud", year: "1995", source: "Tate", link: "https://www.tate.org.uk/art/artworks/freud-woman-sleeping-p11507" },
    "body/23.jpg": { author: "Marlene Dumas", year: "2018", source: "davidzwirner", link: "https://www.davidzwirner.com/artworks/marlene-dumas-teeth-e9256" }

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