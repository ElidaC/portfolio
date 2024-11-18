// 检查元素是否进入视口
function isInViewport(element, parent) {
    const rect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    return (
        rect.top < parentRect.bottom && // 元素顶部进入容器范围
        rect.bottom > parentRect.top   // 元素底部进入容器范围
    );
}

// 淡入效果
function fadeInOnScroll() {
    const elements = phone.querySelectorAll('.fade:not(.active)'); // 未激活的 .fade 元素

    elements.forEach((element, index) => {
        if (isInViewport(element, phone)) {
            element.classList.add('active'); // 添加 active 类名触发淡入
        }
    });
}

// 滚动时 text-container 的移动效果
function moveTextOnScroll() {
    const elements = phone.querySelectorAll('.fade .text-container');

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const offset = rect.top / phone.clientHeight; // 根据滚动位置计算偏移量

        element.style.transform = `translateY(${offset * 20}px)`; // 调整移动范围
    });
}

// 滚动触发的主函数
function handleScroll() {
    fadeInOnScroll(); // 处理淡入效果
    moveTextOnScroll(); // 滚动时移动 text-container
}

// 主程序入口
const phone = document.querySelector('.phone'); // 滚动容器
if (phone) {
    // 页面加载时执行初始动作
    window.onload = () => {
        fadeInOnScroll(); // 初次检查淡入
        moveTextOnScroll(); // 初始化移动效果
    };

    // 滚动时绑定触发逻辑
    phone.addEventListener('scroll', handleScroll);
}






