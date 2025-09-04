let burger = document.querySelector(".header_burger__mobile");
let menuMobile = document.querySelector(".menu_mobile");
let cover = document.querySelector(".cover");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuMobile.classList.toggle("active");
    cover.classList.toggle("active");
});

cover.addEventListener("click", () => {
    burger.classList.remove("active");
    menuMobile.classList.remove("active");
    cover.classList.remove("active");
});

let body = document.querySelector("body");

body.addEventListener("click", () => {
    burger.classList.toggle("lock");
});


const popup = document.querySelector('.pop-up');
const bannerButton = document.querySelector('.top-banner_button'); // Кнопка, чтобы открыть
const crossModal = document.querySelector('.pop-up_cross');

if (bannerButton) {
    bannerButton.addEventListener('click', () => {
        popup.classList.add('active');
    });
}

crossModal.addEventListener('click', () => {
    popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});