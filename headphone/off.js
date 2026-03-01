
const DATA = [
  {
    id: "p01",
    years: 4,
    volume: 5,
    size: 75, 
    thumb: "bg/amaya2.png", 
    imgA: "bg/amaya2.png",  
    imgB: "bg/amaya1.png",  
    title: "Reflective Shelter",
    link: "world/amaya.html",
    accent: "beige",
    info: {
      interviewee: "Amaaya V.E.",
      device: "AirPods",
      volume: "5/10",
      experience: "4 years",
      moment: "when walking & working out",
    },
  },

  {
    id: "p02",
    years: 10,
    volume: 5,
    size: 75, 
    thumb: "bg/ashley2.png", 
    imgA: "bg/ashley2.png",  
    imgB: "bg/ashley1.png",  
    title: "Rhythmic Calm",
    link: "world/ashley.html",
    accent: "skyblue",
    info: {
      interviewee: "Ashley S.",
      device: "AirPods Pro Max",
      volume: "5/10",
      experience: "10 years",
      moment: "only when going on walks or runs",
    },
  },

  {
    id: "p03",
    years: 8,
    volume: 9,
    size: 75, 
    thumb: "bg/chris2.png", 
    imgA: "bg/chris2.png",  
    imgB: "bg/chris1.png",  
    title: "Energy Boost",
    link: "world/chris.html",
    accent: "orangered",
    info: {
      interviewee: "Chris J.",
      device: "Beats",
      volume: "9/10",
      experience: "8 years",
      moment: "during workout",
    },
  },

  {
    id: "p04",
    years: 12,
    volume: 8,
    size: 75, 
    thumb: "bg/daelyn2.png", 
    imgA: "bg/daelyn2.png",  
    imgB: "bg/daelyn1.png",  
    title: "Inner Escape",
    link: "world/daelyn.html",
    accent: "beige",
    info: {
      interviewee: "Daelyn D.",
      device: "AirPods",
      volume: "8/10",
      experience: "12 years",
      moment: "all the time(studying, walking, relaxing, & sleeping...)",
    },
  },

  {
    id: "p05",
    years: 10,
    volume: 8,
    size: 75, 
    thumb: "bg/demi2.png", 
    imgA: "bg/demi2.png",  
    imgB: "bg/demi1.png",  
    title: "Gentle Companion",
    link: "world/demi.html",
    accent: "lightgreen",
    info: {
      interviewee: "Demi Z.",
      device: "AirPods",
      volume: "8/10",
      experience: "10 years",
      moment: "on commute & during lunch break",
    },
  },

  {
    id: "p06",
    years: 7,
    volume: 6,
    size: 75, 
    thumb: "bg/di2.png", 
    imgA: "bg/di2.png",  
    imgB: "bg/di1.png",  
    title: "Emotional Orchestra",
    link: "world/di.html",
    accent: "pink",
    info: {
      interviewee: "Di X.",
      device: "QDC",
      volume: "6/10",
      experience: "7 years",
      moment: "while transcribing the music",
    },
  },

  {
    id: "p07",
    years: 6,
    volume: 4,
    size: 75, 
    thumb: "bg/entao2.png", 
    imgA: "bg/entao2.png",  
    imgB: "bg/entao1.png",  
    title: "Private Entertain Time",
    link: "world/entao.html",
    accent: "black",
    info: {
      interviewee: "Entao Z.",
      device: "AirPods & Vivo tws4 HiFi",
      volume: "4/10",
      experience: "6 years",
      moment: "when there's people around",
    },
  },

  {
    id: "p08",
    years: 8,
    volume: 6,
    size: 75, 
    thumb: "bg/erin2.png", 
    imgA: "bg/erin2.png",  
    imgB: "bg/erin1.png",  
    title: "Selective Reality",
    link: "world/erin.html",
    accent: "red",
    info: {
      interviewee: "Erin D.",
      device: "AirPods Pro Max",
      volume: "6/10",
      experience: "8 years",
      moment: "while calling family and friends in public",
    },
  },

  {
    id: "p09",
    years: 21,
    volume: 4,
    size: 75, 
    thumb: "bg/gang2.png", 
    imgA: "bg/gang2.png",  
    imgB: "bg/gang1.png",  
    title: "Creative Source",
    link: "world/gang.html",
    accent: "orange",
    info: {
      interviewee: "Gang C.",
      device: "Monster",
      volume: "4/10",
      experience: "21 years",
      moment: "when doing design work",
    },
  },

  {
    id: "p10",
    years: 9,
    volume: 4,
    size: 75, 
    thumb: "bg/helen2.png", 
    imgA: "bg/helen2.png",  
    imgB: "bg/helen1.png",  
    title: "Memory Scanctuary",
    link: "world/helen.html",
    accent: "blue",
    info: {
      interviewee: "Helen C.",
      device: "Sony",
      volume: "4/10",
      experience: "9 years",
      moment: "on commute",
    },
  },

  {
    id: "p11",
    years: 4,
    volume: 2,
    size: 75, 
    thumb: "bg/joe2.png", 
    imgA: "bg/joe2.png",  
    imgB: "bg/joe1.png",  
    title: "Soul Listener",
    link: "world/joe.html",
    accent: "cyan",
    info: {
      interviewee: "Joe Z.",
      device: "HUAWEI",
      volume: "2/10",
      experience: "4 years",
      moment: "when being alone",
    },
  },

  {
    id: "p12",
    years: 3,
    volume: 4,
    size: 75, 
    thumb: "bg/nerwen2.png", 
    imgA: "bg/nerwen2.png",  
    imgB: "bg/nerwen1.png",  
    title: "Listening Ritual",
    link: "world/nerwen.html",
    accent: "darkred",
    info: {
      interviewee: "Nerwen C.",
      device: "Sony",
      volume: "4/10",
      experience: "3 years",
      moment: "while listening to music albums",
    },
  },

  {
    id: "p13",
    years: 5,
    volume: 5,
    size: 75, 
    thumb: "bg/tara2.png", 
    imgA: "bg/tara2.png",  
    imgB: "bg/tara1.png",  
    title: "Emotional Recharge",
    link: "world/tara.html",
    accent: "darkblue",
    info: {
      interviewee: "Tara W.",
      device: "AirPods Pro",
      volume: "5/10",
      experience: "5 years",
      moment: "when feeling down at midnight",
    },
  },
];

const stage = document.getElementById("stage");
const map = document.getElementById("map");

const crosshair = document.getElementById("crosshair");
const lineH = document.getElementById("lineH");
const lineV = document.getElementById("lineV");

const overlay = document.getElementById("overlay");
const overlayBackdrop = document.getElementById("overlayBackdrop");
const closeBtn = document.getElementById("closeBtn");

const iName = document.getElementById("iName");
const iDevice = document.getElementById("iDevice");
const iVolume = document.getElementById("iVolume");
const iYears = document.getElementById("iYears");
const iMoment = document.getElementById("iMoment");

const imgA = document.getElementById("imgA");
const imgB = document.getElementById("imgB");

/* ✅ 新增：imgB 的链接节点 */
const linkB = document.getElementById("linkB");

/* 你原来这里有 titleLink/titleText，但你贴的 HTML 没有它们。
   为了不报错，这里安全处理（如果你实际 HTML 里有就照常工作） */
const titleLink = document.getElementById("titleLink");
const titleText = document.getElementById("titleText");

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function lerp(a, b, t) { return a + (b - a) * t; }

let circles = [];
let hovered = null;     // index
let selected = null;    // index

// layout mapping
function computeXY(years, volume){
  const w = window.innerWidth;
  const h = window.innerHeight;

  const pad = 120;
  const left = pad;
  const right = w - pad - 260; // reserve nav area like before
  const top = pad;
  const bottom = h - pad;

  const tx = clamp(years / 21, 0, 1);
  const ty = clamp(volume / 10, 0, 1);

  const x = lerp(left, right, tx);
  const y = lerp(bottom, top, ty); // invert y
  return { x, y };
}

function setCrosshairAt(x, y){
  // horizontal from left -> x
  lineH.style.top = `${y}px`;
  lineH.style.width = `${x}px`;

  // vertical from bottom -> y
  const h = window.innerHeight;
  lineV.style.left = `${x}px`;
  lineV.style.height = `${h - y}px`;

  crosshair.classList.add("on");
  crosshair.setAttribute("aria-hidden", "false");
}

function hideCrosshair(){
  // only hide when nothing selected
  if (selected !== null) return;
  crosshair.classList.remove("on");
  crosshair.setAttribute("aria-hidden", "true");
}

function applyHiddenExcept(idx){
  circles.forEach((c, i) => {
    c.classList.toggle("hidden", i !== idx);
  });
}

function clearHidden(){
  circles.forEach((c) => c.classList.remove("hidden"));
}

function openOverlay(d){
  overlay.classList.add("on");
  overlay.setAttribute("aria-hidden", "false");

  // fill info
  iName.textContent = d.info?.interviewee ?? "";
  iDevice.textContent = d.info?.device ?? "";
  iVolume.textContent = d.info?.volume ?? "";
  iYears.textContent = d.info?.experience ?? "";
  iMoment.textContent = d.info?.moment ?? "";

  // images
  imgA.src = d.imgA || d.thumb || "";
  imgB.src = d.imgB || d.thumb || "";

  // ✅ imgB link（点击 imgB 跳转到人物页面）
  if (linkB) {
    linkB.href = d.link || "#";
    // 可选：你想新开标签就打开这一行
    // linkB.target = "_blank";
  }

  // title link（如果你 HTML 里真有 titleLink/titleText 就会正常工作）
  if (titleText) titleText.textContent = d.title || "Enter headphone world";
  if (titleLink) {
    titleLink.href = d.link || "#";
    titleLink.style.color = d.accent || "orangered";
    titleLink.style.textDecorationColor = d.accent || "orangered";
  }
}

function closeOverlay(){
  overlay.classList.remove("on");
  overlay.setAttribute("aria-hidden", "true");
}

// render
function render(){
  map.innerHTML = "";
  circles = [];

  DATA.forEach((d, idx) => {
    const el = document.createElement("div");
    el.className = "circle";
    el.dataset.idx = String(idx);

    const { x, y } = computeXY(d.years, d.volume);

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    const size = d.size || 64;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;

    el.style.setProperty("--img", `url("${d.thumb || ""}")`);

    el.addEventListener("mouseenter", () => {
      if (selected !== null) return; // when overlay open, ignore hover
      hovered = idx;
      setCrosshairAt(x, y);
    });

    el.addEventListener("mouseleave", () => {
      if (selected !== null) return;
      hovered = null;
      hideCrosshair();
    });

    el.addEventListener("click", (e) => {
      e.stopPropagation();

      selected = idx;
      hovered = null;

      // keep crosshair fixed at selected
      setCrosshairAt(x, y);

      // hide others
      applyHiddenExcept(idx);

      // open overlay bar
      openOverlay(d);
    });

    map.appendChild(el);
    circles.push(el);
  });
}

function resetToGallery(){
  selected = null;
  hovered = null;
  closeOverlay();
  clearHidden();
  hideCrosshair();
}

// close logic
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  resetToGallery();
});

overlayBackdrop.addEventListener("click", () => {
  resetToGallery();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && selected !== null) resetToGallery();
});

// keep crosshair aligned on resize (recompute)
window.addEventListener("resize", () => {
  render();
  if (selected !== null) {
    const d = DATA[selected];
    const { x, y } = computeXY(d.years, d.volume);
    setCrosshairAt(x, y);
  }
});

// init
render();

/* ✅ 防止 linkB 是 # 时点击导致页面跳到顶部（可选但建议） */
if (linkB) {
  linkB.addEventListener("click", (e) => {
    if (!linkB.href || linkB.getAttribute("href") === "#") e.preventDefault();
    // 不阻止冒泡：这样不影响 overlay 其他区域
  });
}