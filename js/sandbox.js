const swiper = new Swiper('.swiper-container', {
    speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
      },
});
