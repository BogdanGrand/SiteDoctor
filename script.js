let burger = document.querySelector('.header_burger');
let burgerMenu = document.querySelector('.header_menu');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})



//swiper 1
var swiper = new Swiper('.swiper-sale', {
  slidesPerView: 3,
  // direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop:true,
  breakpoints:{
    320:{
      slidesPerView: 1,
    },
    480:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  }
  
});

