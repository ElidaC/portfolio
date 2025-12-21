const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');

document.body.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {
  if ($bigBall) {
    TweenMax.to($bigBall, 0.35, { x: e.pageX - 25, y: e.pageY - 25 });
  }
  if ($smallBall) {
    TweenMax.to($smallBall, 0.12, { x: e.pageX - 5, y: e.pageY - 7 });
  }
}

function onMouseHover(scale = 5) {
  if (!$bigBall) return;
  TweenMax.to($bigBall, 0.25, { scale });
}
function onMouseHoverOut() {
  if (!$bigBall) return;
  TweenMax.to($bigBall, 0.25, { scale: 1 });
}

/* 你要的 hover 放大目标：topbar / hero / big-title
   也顺便把你之前的 .hoverable 支持保留
*/
const hoverTargets = [
  ...document.querySelectorAll('.hoverable'),
  ...document.querySelectorAll('.topbar, .hero, .big-title')
];

// 去重（同一个元素可能被选中两次）
const uniq = new Set(hoverTargets);

uniq.forEach(el => {
  // 可选：不同元素不同放大倍率（更有层次）
  let scale = 5;
  if (el.classList.contains('topbar')) scale = 3.2;
  if (el.classList.contains('hero')) scale = 5.2;
  if (el.classList.contains('big-title')) scale = 4.2;

  el.addEventListener('mouseenter', () => onMouseHover(scale));
  el.addEventListener('mouseleave', onMouseHoverOut);
});








const WORKS = [
    {
      id: "sculpt-01",
      tags: ["sculpture"],
      title: "Triangular Blooming",
      desc: "Sculpture · 2025 · Material details…",
      images: ["images/fa/unisola-1.jpg", "images/fa/unisola-2.jpg"]
    },
    {
      id: "sculpt-02",
      tags: ["sculpture"],
      title: "Unisola",
      desc: "Sculpture · 2025 · Material details…",
      images: ["images/fa/unisola-1.jpg", "images/fa/unisola-2.jpg"]
    },
    {
      id: "painting-01",
      tags: ["painting"],
      title: "Color in Mood",
      desc: "Painting · 2024 · Oil on canvas…",
      images: ["images/fa/painting-1.jpg"]
    },
    {
      id: "mixed-01",
      tags: ["mixed-media"],
      title: "Urban Green Shifts",
      desc: "Mixed Media · 2024 · …",
      images: ["images/fa/mixed-1.jpg", "images/fa/mixed-2.jpg", "images/fa/mixed-3.jpg"]
    },
    {
      id: "print-01",
      tags: ["printmaking"],
      title: "Listening in Between",
      desc: "Printmaking · 2023 · …",
      images: ["images/fa/print-1.jpg"]
    }
  ];
  
  // ===== DOM =====
  const track = document.getElementById("track");
  const hud = document.getElementById("hud");
  const tagsEl = document.getElementById("tags");
  
  // ===== state =====
  let activeTag = "sculpture";     // 默认进来显示哪个（你可改）
  let works = [];
  let index = 0;
  
  let targetX = 0;
  let currentX = 0;
  let isAnimating = false;
  
  // ===== helpers =====
  function escapeHTML(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#39;");
  }
  function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }
  function applyTransform(x){
    track.style.transform = `translate3d(${x}px,0,0)`;
  }
  
  // ===== fixed meta (title/desc 不动位置，只更新内容) =====
  let metaTitleEl, metaDescEl;
  function ensureMeta(){
    let metaFixed = document.querySelector(".meta-fixed");
    if (!metaFixed){
      metaFixed = document.createElement("div");
      metaFixed.className = "meta-fixed";
      metaFixed.innerHTML = `
        <div class="meta">
          <div class="title" id="metaTitle"></div>
          <div class="desc" id="metaDesc"></div>
        </div>
      `;
      document.body.appendChild(metaFixed);
    }
    metaTitleEl = document.getElementById("metaTitle");
    metaDescEl  = document.getElementById("metaDesc");
  }
  
  function updateMeta(){
    if (!works.length) return;
    const w = works[index];
    if (metaTitleEl) metaTitleEl.textContent = w.title;
    if (metaDescEl)  metaDescEl.textContent  = w.desc;
  }
  
  function updateHud(){
    if (!hud) return;
    const left = String(index + 1).padStart(2,"0");
    const right = String(works.length || 1).padStart(2,"0");
    hud.textContent = `${left} / ${right}`;
  }
  
  // ===== lightbox =====
  let lightboxEl, lightboxImgEl;
  function ensureLightbox(){
    lightboxEl = document.querySelector(".lightbox");
    if (!lightboxEl){
      lightboxEl = document.createElement("div");
      lightboxEl.className = "lightbox";
      document.body.appendChild(lightboxEl);
    }
    lightboxImgEl = lightboxEl.querySelector("img");
  
    // 点击背景/图片关闭
    lightboxEl.addEventListener("click", () => closeLightbox());
    window.addEventListener("keydown", (e)=>{
      if (e.key === "Escape") closeLightbox();
    });
  }
  function openLightbox(src){
    if (!lightboxEl) ensureLightbox();
    lightboxImgEl.src = src;
    lightboxEl.classList.add("is-open");
  }
  function closeLightbox(){
    if (!lightboxEl) return;
    lightboxEl.classList.remove("is-open");
    // 可选：清 src 避免闪烁
    // lightboxImgEl.src = "";
  }
  
  // ===== render =====
  function render(){
    if (!track) return;
    track.innerHTML = "";
  
    works.forEach((w) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `
        <div class="artcard">
          <div class="art">
            <div class="art-row">
              ${w.images.map(src => `<img data-zoom-src="${src}" src="${src}" alt="">`).join("")}
            </div>
          </div>
        </div>
      `;
      track.appendChild(slide);
    });
  
    // 绑定点击放大
    track.querySelectorAll("img[data-zoom-src]").forEach(img=>{
      img.addEventListener("click", (e)=>{
        e.stopPropagation();
        openLightbox(img.getAttribute("data-zoom-src"));
      });
    });
  
    // reset position
    index = clamp(index, 0, works.length - 1);
    currentX = -index * window.innerWidth;
    targetX = currentX;
    applyTransform(currentX);
  
    updateMeta();
    updateHud();
  }
  
  // ===== animation =====
  function animate(){
    isAnimating = true;
    const ease = 0.12;
    currentX += (targetX - currentX) * ease;
  
    if (Math.abs(targetX - currentX) < 0.5){
      currentX = targetX;
      applyTransform(currentX);
      isAnimating = false;
      return;
    }
    applyTransform(currentX);
    requestAnimationFrame(animate);
  }
  
  function goTo(nextIndex){
    if (!works.length) return;
    index = clamp(nextIndex, 0, works.length - 1);
    targetX = -index * window.innerWidth;
    if (!isAnimating) animate();
    updateMeta();
    updateHud();
  }
  
  // ===== wheel -> next/prev work =====
  let wheelLock = false;
  function onWheel(e){
    e.preventDefault();
    if (wheelLock) return;
  
    const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(delta) < 8) return;
  
    wheelLock = true;
    setTimeout(()=> wheelLock = false, 420);
  
    if (delta > 0) goTo(index + 1);
    else goTo(index - 1);
  }
  window.addEventListener("wheel", onWheel, { passive:false });
  
  // keyboard (可选)
  window.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowDown" || e.key === "ArrowRight") goTo(index + 1);
    if(e.key === "ArrowUp" || e.key === "ArrowLeft") goTo(index - 1);
  });
  
  // resize
  window.addEventListener("resize", ()=>{
    currentX = -index * window.innerWidth;
    targetX = currentX;
    applyTransform(currentX);
  });
  
  // ===== tags =====
  function setActiveTag(tag){
    activeTag = tag;
  
    // UI active
    tagsEl?.querySelectorAll(".tag").forEach(x => x.classList.remove("is-active"));
    const btn = tagsEl?.querySelector(`.tag[data-tag="${CSS.escape(tag)}"]`);
    if (btn) btn.classList.add("is-active");
  
    // data filter（没有 All，所以就是 4 类之一）
    works = WORKS.filter(w => w.tags.includes(tag));
  
    index = 0;
    render();
  }
  
  tagsEl?.addEventListener("click", (e)=>{
    const t = e.target.closest(".tag");
    if(!t) return;
    setActiveTag(t.dataset.tag);
  });
  
  // ===== init =====
  ensureMeta();
  ensureLightbox();
  
  // 默认用 HTML 里已有的 .is-active；否则用 activeTag
  const preset = tagsEl?.querySelector(".tag.is-active")?.dataset.tag;
  setActiveTag(preset || activeTag);