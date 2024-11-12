const container = document.querySelector(".container");
const innerContainer = document.querySelector(".inner-container");

document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    const xRotation = (clientY / window.innerHeight - 0.5) * 20;
    const yRotation = (clientX / window.innerWidth - 0.5) * 20;
    innerContainer.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`; // Rotate inner content
});


const box = document.querySelector('.box');
const circle = document.querySelector('.circle');

const pngImages = [
    'png/1-1.png', 
    'png/1-5.png',
    'png/1-6.png',
    'png/1-8.png',
    'png/1-11.png',
    'png/2-1.png',
    'png/2-3.png',
    'png/2-6.png',
    'png/2-13.png',
    'png/3-2.png',
    'png/3-2.png',
    'png/3-4.png',
    'png/3-8.png',
    'png/4-1.png',
    'png/4-2.png',
    'png/4-5.png',
    'png/4-6.png',
    'png/4-7.png',
    'png/4-8.png',
    'png/4-10.png',
    'png/4-11.png',
    'png/4-12.png',
    'png/5-1.png',
    'png/5-2.png',
    'png/5-4.png',
    'png/5-5.png',
    'png/5-6.png',
    'png/5-9.png',
    'png/5-11.png',
];

function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

let targetImageCount = Math.floor(Math.random() * 6) + 5; 
let currentImageCount = 0; 

function createAndFlyImage() {
    const src = pngImages[Math.floor(Math.random() * pngImages.length)];
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('png-image');
    
    const circleRect = circle.getBoundingClientRect();
    const initialX = circleRect.left + circleRect.width / 2 + (Math.random() * 100 - 50);
    const initialY = circleRect.top + circleRect.height / 2 + (Math.random() * 100 - 50);
    img.style.left = `${initialX}px`;
    img.style.top = `${initialY}px`;

    box.appendChild(img);
    currentImageCount++;

    setTimeout(() => {
        const { x, y } = getRandomPosition();
        img.style.transform = `translate(${x - initialX}px, ${y - initialY}px)`;
        img.style.opacity = 1; 

        img.addEventListener("transitionend", () => {
            img.style.opacity = 0.2;
        }, { once: true });
    }, Math.random() * 8000);
}

function flyOutImages() {
    if (currentImageCount >= targetImageCount) {
        return; 
    }

    createAndFlyImage();
}

function resetImageCount() {
    currentImageCount = 0;
    targetImageCount = Math.floor(Math.random() * 10) + 8; 
}

document.addEventListener("mousemove", flyOutImages);

setInterval(resetImageCount, 3000);
