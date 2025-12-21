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


const hoverTargets = [
  ...document.querySelectorAll('.hoverable'),
  ...document.querySelectorAll('.topbar, .hero, .big-title, .title')
];


const uniq = new Set(hoverTargets);

uniq.forEach(el => {
  let scale = 5;
  if (el.classList.contains('topbar')) scale = 3.2;
  if (el.classList.contains('hero')) scale = 5.2;
  if (el.classList.contains('big-title')) scale = 4.2;

  el.addEventListener('mouseenter', () => onMouseHover(scale));
  el.addEventListener('mouseleave', onMouseHoverOut);
});