const swiper = new Swiper('.swiper-container', {
    speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
    mousewheelControl: true
});
