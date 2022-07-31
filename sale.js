var swiper = new Swiper('.swiper__sale-page', {
    slidesPerView: 1,
    // direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    
  });

const slideFirst = document.querySelector('.slide-first');
const slideSecond = document.querySelector('.slide-second');
const slideThird = document.querySelector('.slide-third');
const slideFour = document.querySelector('.slide-four');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const four = document.querySelector('.four');
const swap = document.querySelectorAll('.swap');
for (let i = 0; i < swap.length; i++) {
  swap[i].addEventListener('click', (e) => {
    if(slideFirst.classList.contains('swiper-slide-active')){
      first.style.display = 'block';
      setTimeout(()=>{
          first.style.opacity = '1';
      },100)
  }else{
      first.style.opacity = '0';
      setTimeout(()=>{
        first.style.display = 'none';
      },100)
      
  }

  if(slideSecond.classList.contains('swiper-slide-active')){
      second.style.display = 'block';
      setTimeout(()=>{
          second.style.opacity = '1';
      },100)
  }else{
      second.style.opacity = '0';
      setTimeout(()=>{
        second.style.display = 'none';
      },100)
      }

  if(slideThird.classList.contains('swiper-slide-active')){
      third.style.display = 'block';
      setTimeout(()=>{
          third.style.opacity = '1';
      },100)
  }else{
      third.style.opacity = '0';
      setTimeout(()=>{
        third.style.display = 'none';
      },100)
      }

  if(slideFour.classList.contains('swiper-slide-active')){
      four.style.display = 'block';
      setTimeout(()=>{
          four.style.opacity = '1';
      },100)
  }else{
      four.style.opacity = '0';
      setTimeout(()=>{
        four.style.display = 'none';
      },100)
      }
  
  })
}

  if(slideFirst.classList.contains('swiper-slide-active')){
    first.style.display = 'block';
    setTimeout(()=>{
        first.style.opacity = '1';
    },100)
}else{
    console.log("hello000");
    first.style.display = 'none';
    first.style.opacity = '1';
    
}

