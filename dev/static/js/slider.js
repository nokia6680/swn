const swiper = new Swiper('.intro-slider__container', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    pagination: {
        el: '.intro-slider__pagination',
        clickable: true,
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.intro-slider__next',
        prevEl: '.intro-slider__prev',
    },
    grabCursor: true,
});
