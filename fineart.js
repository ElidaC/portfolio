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







// ===== DOM =====
const track = document.getElementById("track");
const hud = document.getElementById("hud");
const tagsEl = document.getElementById("tags");
const worksSource = document.getElementById("works-source");

// ===== state =====
let activeTag = "";
let works = [];      
let index = 0;

let targetX = 0;
let currentX = 0;
let isAnimating = false;

// ===== helpers =====
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
function applyTransform(x) { track.style.transform = `translate3d(${x}px,0,0)`; }

// ===== fixed meta =====
let metaTitleEl, metaDescEl;
function ensureMeta() {
  let metaFixed = document.querySelector(".meta-fixed");
  if (!metaFixed) {
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
  metaDescEl = document.getElementById("metaDesc");
}

function updateMeta() {
  if (!works.length) return;
  const w = works[index];
  metaTitleEl.textContent = w.title || "";
  metaDescEl.textContent = w.desc || "";
}

function updateHud() {
  if (!hud) return;
  const left = String(index + 1).padStart(2, "0");
  const right = String(works.length || 1).padStart(2, "0");
  hud.textContent = `${left} / ${right}`;
}

// ===== lightbox =====
let lightboxEl, lightboxImgEl;
function ensureLightbox() {
  lightboxEl = document.querySelector(".lightbox");
  if (!lightboxEl) {
    lightboxEl = document.createElement("div");
    lightboxEl.className = "lightbox";
    lightboxEl.innerHTML = `<img alt="">`;
    document.body.appendChild(lightboxEl);
  }
  lightboxImgEl = lightboxEl.querySelector("img");

  lightboxEl.addEventListener("click", () => closeLightbox());
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}
function openLightbox(src) {
  if (!lightboxEl) ensureLightbox();
  lightboxImgEl.src = src;
  lightboxEl.classList.add("is-open");
}
function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove("is-open");
}

// ===== read works from HTML (NO JSON) =====
function getAllWorksFromHTML() {
  if (!worksSource) return [];
  const nodes = Array.from(worksSource.querySelectorAll(".work"));
  return nodes.map(node => {
    const imgs = Array.from(node.querySelectorAll("img"))
      .map(img => img.getAttribute("src"))
      .filter(Boolean);

    return {
      id: node.dataset.id || "",
      tags: (node.dataset.tags || "").split(",").map(s => s.trim()).filter(Boolean),
      title: node.dataset.title || "",
      desc: node.dataset.desc || "",
      images: imgs
    };
  });
}

const ALL_WORKS = getAllWorksFromHTML();

// ===== render =====
function render() {
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

  // bind zoom
  track.querySelectorAll("img[data-zoom-src]").forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(img.getAttribute("data-zoom-src"));
    });
  });

  index = clamp(index, 0, works.length - 1);
  currentX = -index * window.innerWidth;
  targetX = currentX;
  applyTransform(currentX);

  updateMeta();
  updateHud();
}

// ===== animation =====
function animate() {
  isAnimating = true;
  const ease = 0.12;
  currentX += (targetX - currentX) * ease;

  if (Math.abs(targetX - currentX) < 0.5) {
    currentX = targetX;
    applyTransform(currentX);
    isAnimating = false;
    return;
  }
  applyTransform(currentX);
  requestAnimationFrame(animate);
}

function goTo(nextIndex) {
  if (!works.length) return;
  index = clamp(nextIndex, 0, works.length - 1);
  targetX = -index * window.innerWidth;
  if (!isAnimating) animate();
  updateMeta();
  updateHud();
}

// ===== wheel =====
let wheelLock = false;
function onWheel(e) {
  e.preventDefault();
  if (wheelLock) return;

  const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (Math.abs(delta) < 8) return;

  wheelLock = true;
  setTimeout(() => wheelLock = false, 420);

  if (delta > 0) goTo(index + 1);
  else goTo(index - 1);
}
window.addEventListener("wheel", onWheel, { passive: false });

// keyboard
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowRight") goTo(index + 1);
  if (e.key === "ArrowUp" || e.key === "ArrowLeft") goTo(index - 1);
});

// resize
window.addEventListener("resize", () => {
  currentX = -index * window.innerWidth;
  targetX = currentX;
  applyTransform(currentX);
});

// ===== tags =====
function setActiveTag(tag) {
  activeTag = tag;

  tagsEl?.querySelectorAll(".tag").forEach(x => x.classList.remove("is-active"));
  const btn = tagsEl?.querySelector(`.tag[data-tag="${CSS.escape(tag)}"]`);
  if (btn) btn.classList.add("is-active");

  works = ALL_WORKS.filter(w => w.tags.includes(tag));
  index = 0;
  render();
}

tagsEl?.addEventListener("click", (e) => {
  const t = e.target.closest(".tag");
  if (!t) return;
  setActiveTag(t.dataset.tag);
});

// ===== init =====
ensureMeta();
ensureLightbox();

const preset = tagsEl?.querySelector(".tag.is-active")?.dataset.tag;
setActiveTag(preset || activeTag);