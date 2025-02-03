const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween:-70,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0, // Rotation angle of cards
        stretch: 0, // Stretch value between cards
        depth: 100, // Depth of the parallax effect
        modifier: 2, // Scale multiplier for each slide
        slideShadows: true, // Enables shadows on slides
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
  breakpoints:{
    0:{
        slidesPerView: 3,
    },
    848:{
        slidesPerView: 3,
    },
    1024:{
        slidesPerView: 3,
    }
  }
  
});