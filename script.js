let index = 0;

function moveSlide(step) {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const totalImages = images.length;

    index += step;

    // Loop the slider
    if (index >= totalImages) {
        index = 0;
    } else if (index < 0) {
        index = totalImages - 1;
    }

    let translateValue = -index * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
}

// Auto Slide Function
setInterval(() => moveSlide(1), 3000);
const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

// Mouse & Touch Events
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    slider.scrollLeft = scrollLeft - walk;
});

// Touch Events (for mobile)
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
