function isInViewport(element, parent) {
    const rect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    return (
        rect.top < parentRect.bottom && 
        rect.bottom > parentRect.top   
    );
}


function fadeInOnScroll() {
    const elements = phone.querySelectorAll('.fade:not(.active)'); 

    elements.forEach((element, index) => {
        if (isInViewport(element, phone)) {
            element.classList.add('active'); 
        }
    });
}


function moveTextOnScroll() {
    const elements = phone.querySelectorAll('.fade .text-container');

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const offset = rect.top / phone.clientHeight; 

        element.style.transform = `translateY(${offset * 20}px)`; 
    });
}


function handleScroll() {
    fadeInOnScroll(); 
    moveTextOnScroll(); 
}


const phone = document.querySelector('.phone');
if (phone) {
    window.onload = () => {
        fadeInOnScroll();
        moveTextOnScroll(); 
    };

    phone.addEventListener('scroll', handleScroll);
}






