let burger = document.querySelector('.header_burger');
let burgerMenu = document.querySelector('.header_menu');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})



//swiper
var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }