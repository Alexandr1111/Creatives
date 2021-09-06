// Для всех сразу

// const anchors = document.querySelectorAll('a[href*="#"]');
//
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const blockID = anchor.getAttribute('href');
//         document.querySelector('' + blockID).scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//         });
//     });
// }

// В моём случае-только для 1 якоря
const anchor = document.querySelectorAll('a[href="#features"]')[1];
anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
