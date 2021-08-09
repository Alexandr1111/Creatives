/*
    На анимированные объекты(иногда их контейнер) вешаем в html класс "anim-items", в css
*/

// Находим все объекты, которые будут поддаваться анимации
let animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;   // получаем высоту объекта
            const animItemOffset = offset(animItem).top; // позиция объекта относительно верха
            const ANIM_START = 4; // коэффициент, регулирующий момент старта анимации

            let animItemPoint = window.innerHeight - animItemHeight / ANIM_START;

            // Бывают ситуации когда анимируемый объект выше по высоте окна браузера
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / ANIM_START;
            }

            // Добавляем класс
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');   // чтобы повторно можно было анимировать объект
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    animOnScroll();
}