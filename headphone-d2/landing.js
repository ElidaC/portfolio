const axis  = document.querySelector('.h-axis');
const track = axis.querySelector('.h-track');
const thumb = axis.querySelector('.h-thumb');

// 三个档位：0%（ON） 50%（中间） 100%（OFF）
const positions = [0, 50, 100];

function setPositionByIndex(index) {
  const x = positions[index];
  thumb.style.setProperty('--x', x);
  thumb.dataset.index = index;
  axis.setAttribute('aria-valuenow', index); // 0,1,2
}

let dragging = false;

thumb.addEventListener('mousedown', (e) => {
  e.preventDefault();
  dragging = true;
});

window.addEventListener('mousemove', (e) => {
  if (!dragging) return;

  const rect = track.getBoundingClientRect();
  let percent = ((e.clientX - rect.left) / rect.width) * 100;
  percent = Math.max(0, Math.min(100, percent));

  thumb.style.setProperty('--x', percent);
});

window.addEventListener('mouseup', () => {
  if (!dragging) return;
  dragging = false;

  // 当前实际的百分比
  const current = parseFloat(
    getComputedStyle(thumb).getPropertyValue('--x')
  );

  // 找最近的档位
  let closestIndex = 0;
  let minDiff = Infinity;

  positions.forEach((p, i) => {
    const diff = Math.abs(p - current);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });

  setPositionByIndex(closestIndex);
});

axis.querySelectorAll('.h-label').forEach(label => {
  label.addEventListener('click', () => {
    const t = label.dataset.target;
    if (t === 'on')  setPositionByIndex(0);
    if (t === 'off') setPositionByIndex(2);
  });
});





const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.style.left = Math.random() * 80 + '%';
  dot.style.top = Math.random() * 80 + '%';

  const color = dot.dataset.color;

  dot.addEventListener('mouseenter', () => {
    dot.style.backgroundColor = color;
  });

  dot.addEventListener('mouseleave', () => {
    dot.style.backgroundColor = 'black';
  });
});


/*

const onLabel = document.querySelectorAll('.h-label')[0];  // ON
const offLabel = document.querySelectorAll('.h-label')[1]; // OFF

// 实时监听鼠标
document.addEventListener("mousemove", (e) => {
    const onRect = onLabel.getBoundingClientRect();
    const offRect = offLabel.getBoundingClientRect();

    // 鼠标距离 ON / OFF 的水平距离
    const distToOn = Math.abs(e.clientX - (onRect.left + onRect.width / 2));
    const distToOff = Math.abs(e.clientX - (offRect.left + offRect.width / 2));

    // 根据距离计算模糊程度（越靠近 ON 越模糊）
    // 🔥 你可调最大模糊值 12 → 可改成 20/30/5 看你想多糊
    let blurStrength = Math.max(0, 12 - distToOn / 25); 

    // 越靠近 OFF 越清晰 → blur降低
    blurStrength -= Math.max(0, 8 - distToOff / 18);

    // 限制最小不为负数
    blurStrength = Math.max(0, blurStrength);

    document.body.style.filter = `blur(${blurStrength}px)`;
    document.body.style.backdropFilter = `blur(${blurStrength}px)`;
});

*/
