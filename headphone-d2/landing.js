
const images = [
    'image/1.jpeg',
  ];

  const container = document.body;

  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('a');
    dot.className = 'dot';
    dot.href = 'on.html';
    dot.style.left = Math.random() * 80 + '%';
    dot.style.top = Math.random() * 80 + '%';
    const img = images[i];

    // 悬停时才加载背景图片
    dot.addEventListener('mouseenter', () => {
      dot.style.backgroundImage = `url(${img})`;
    });
    dot.addEventListener('mouseleave', () => {
      dot.style.backgroundImage = ''; // 离开时恢复纯黑
    });

    container.appendChild(dot);
  }
  