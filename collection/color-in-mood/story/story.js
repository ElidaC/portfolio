document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".memory-img");
    let currentIndex = 0;

    // 随机打乱图片顺序
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // 初始化：随机顺序
    const shuffledImages = shuffleArray([...images]);
    shuffledImages.forEach((img, index) => {
        img.style.zIndex = index;
    });

    // 切换图片
    const showNextImage = () => {
        // 隐藏当前图片
        images[currentIndex].classList.remove("active");

        // 选择下一张图片
        currentIndex = (currentIndex + 1) % images.length;

        // 显示新的图片
        images[currentIndex].classList.add("active");
    };

    // 显示第一张图片
    images[currentIndex].classList.add("active");

    // 每5秒切换一次
    setInterval(showNextImage, 5000);
});
