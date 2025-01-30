const slider = document.querySelector('.slider-container');
let isDown = false;
let startX;
let scrollLeft;

// Mouse & Touch Events
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
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
