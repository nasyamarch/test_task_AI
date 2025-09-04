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
})