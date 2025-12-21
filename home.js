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


/* ========== section scroll reveal ========== */
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.05,                 // 更早触发（更有“滑进来”的感觉）
    rootMargin: '0px 0px -120px 0px' // 提前一点开始动画
  }
);

sections.forEach(sec => observer.observe(sec));




/* ===== image shuffle ===== */
document.querySelectorAll('.edge-media.shuffle').forEach(container=>{
  const imgs = container.querySelectorAll('.shuffle-img');
  if(imgs.length <= 1) return;

  let index = 0;

  setInterval(()=>{
    imgs[index].classList.remove('is-active');
    index = (index + 1) % imgs.length;
    imgs[index].classList.add('is-active');
  }, 1800); // 切换间隔（毫秒）
});