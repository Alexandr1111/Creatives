const burger = document.querySelector('.header1__burger');
const burgerMenu = document.querySelector('.header1__menu-items');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('lock'); // чтобы при открытом меню блокировалась прокрутка страницы
})

burgerMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.classList.remove('lock');
})