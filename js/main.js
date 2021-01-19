let swiper = new Swiper('.slider-container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105,
});

const burger = document.querySelector('.header__burger'),
      close = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      list = document.querySelector('.menu__list');

burger.addEventListener('click', () => {
    menu.classList.add('menu-visible');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu-visible');
});

list.addEventListener('click', () => {
    menu.classList.remove('menu-visible');
});