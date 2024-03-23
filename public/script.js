const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
    }
}); 