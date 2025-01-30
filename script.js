document.addEventListener("DOMContentLoaded", function () {
    // Food Menu Toggle
    const menuBtn = document.getElementById("view-menu-btn");
    const menuFull = document.getElementById("menu-full");

    menuBtn.addEventListener("click", () => {
        if (menuFull.style.display === "none" || menuFull.style.display === "") {
            menuFull.style.display = "block";
            menuBtn.textContent = "Hide Menu";
        } else {
            menuFull.style.display = "none";
            menuBtn.textContent = "View Full Menu";
        }
    });

    // Image Slider (Improved Swiping)
    const sliderContainer = document.querySelector(".slider-container");
    const slider = document.querySelector(".slider");

    // Clone the first and last images
    const firstImage = slider.firstElementChild.cloneNode(true);
    const lastImage = slider.lastElementChild.cloneNode(true);
    slider.appendChild(firstImage);
    slider.insertBefore(lastImage, slider.firstElementChild);

    let isDragging = false;
    let startX, scrollLeft;

    // Adjust the scroll position to show the first image
    sliderContainer.scrollLeft = sliderContainer.offsetWidth;

    sliderContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
        sliderContainer.style.scrollBehavior = "auto";
    });

    sliderContainer.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    sliderContainer.addEventListener("mouseup", () => {
        isDragging = false;
        sliderContainer.style.scrollBehavior = "smooth";
    });

    sliderContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 2;
        sliderContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch Support
    let touchStartX = 0;
    let touchScrollLeft = 0;

    sliderContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = sliderContainer.scrollLeft;
    });

    sliderContainer.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 2;
        sliderContainer.scrollLeft = touchScrollLeft - walk;
    });

    // Auto Scroll Every 3 Seconds
    setInterval(() => {
        if (!isDragging) {
            sliderContainer.scrollLeft += sliderContainer.clientWidth;
        }
    }, 3000);

    // Infinite scroll logic
    sliderContainer.addEventListener("scroll", () => {
        if (sliderContainer.scrollLeft >= sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
            sliderContainer.scrollLeft = sliderContainer.offsetWidth;
        } else if (sliderContainer.scrollLeft <= 0) {
            sliderContainer.scrollLeft = sliderContainer.scrollWidth - 2 * sliderContainer.offsetWidth;
        }
    });
});
