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
