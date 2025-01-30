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

    // Image Slider - Infinite Scrolling
    const sliderContainer = document.querySelector(".slider-container");
    const slider = document.querySelector(".slider");
    let images = document.querySelectorAll(".slider img");

    // Clone images for seamless looping
    images.forEach((img) => {
        let clone = img.cloneNode(true);
        slider.appendChild(clone);
    });

    let isDragging = false;
    let startX, scrollLeft;

    // Mouse Dragging
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

    // Touch Support for Swiping
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

    // Infinite Scrolling Logic
    function checkScroll() {
        if (sliderContainer.scrollLeft >= slider.scrollWidth / 2) {
            sliderContainer.scrollLeft = 0;
        } else if (sliderContainer.scrollLeft <= 0) {
            sliderContainer.scrollLeft = slider.scrollWidth / 2;
        }
    }

    // Auto Scroll Every 3 Seconds
    function autoScroll() {
        if (!isDragging) {
            sliderContainer.scrollLeft += sliderContainer.clientWidth;
            checkScroll();
        }
    }

    setInterval(autoScroll, 3000);

    // Listen for manual scroll and loop it infinitely
    sliderContainer.addEventListener("scroll", checkScroll);
});
