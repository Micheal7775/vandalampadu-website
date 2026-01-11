document.querySelectorAll(".slider").forEach(slider => {

    const slides = slider.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let index = 0;
    let startX = 0;
    let isDragging = false;

    function showSlide(i) {
        index = (i + images.length) % images.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    /* BUTTONS */
    prevBtn.addEventListener("click", () => showSlide(index - 1));
    nextBtn.addEventListener("click", () => showSlide(index + 1));

    /* TOUCH */
    slides.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener("touchend", e => {
        handleSwipe(startX, e.changedTouches[0].clientX);
    });

    /* MOUSE */
    slides.addEventListener("mousedown", e => {
        isDragging = true;
        startX = e.clientX;
    });

    slides.addEventListener("mouseup", e => {
        if (!isDragging) return;
        isDragging = false;
        handleSwipe(startX, e.clientX);
    });

    slides.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    function handleSwipe(start, end) {
        const diff = start - end;
        if (diff > 50) showSlide(index + 1);
        else if (diff < -50) showSlide(index - 1);
    }
});
