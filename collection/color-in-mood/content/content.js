document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".photo img"); // 获取所有图片元素
  let currentIndex = 0; // 当前显示的图片索引

  // 隐藏所有图片
  const hideAllImages = () => {
      images.forEach(img => {
          img.classList.remove("visible");
          img.classList.add("hidden");
      });
  };

  // 显示随机一张图片
  const showRandomImage = () => {
      hideAllImages();
      currentIndex = Math.floor(Math.random() * images.length); // 随机索引
      images[currentIndex].classList.remove("hidden");
      images[currentIndex].classList.add("visible");
  };

  // 初始显示第一张图片
  showRandomImage();

  // 每5秒切换一次图片
  setInterval(showRandomImage, 5000);
});




document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".slow-video");
  video.playbackRate = 0.5; // 设置播放速度为原速的一半
});



