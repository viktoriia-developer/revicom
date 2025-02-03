const swiper= new Swiper('.slider-wrapper', {
    direction:'vertical',
    loop:true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextE1: '.swiper-button-next',
        prevE1: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
      
    }
});