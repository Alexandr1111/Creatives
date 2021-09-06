const burger = document.querySelector('.header1__burger');
const burgerMenu = document.querySelector('.header1__menu-items');
const html = document.documentElement;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    html.classList.toggle('lock');
    document.body.classList.toggle('lock'); // чтобы при открытом меню блокировалась прокрутка страницы
})

burgerMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    burgerMenu.classList.remove('active');
    html.classList.remove('lock');
    document.body.classList.remove('lock');
})