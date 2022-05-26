let burger = document.querySelector('.header_burger');
let burgerMenu = document.querySelector('.header_menu');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})