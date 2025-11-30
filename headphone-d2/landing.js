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