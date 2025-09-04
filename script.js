let burger = document.querySelector(".header_burger__mobile");
let menuMobile = document.querySelector(".menu_mobile");
let mainContainer = document.querySelector(".main_container");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuMobile.classList.toggle("active");
    mainContainer.classList.toggle("active");
});

mainContainer.addEventListener("click", () => {
    burger.classList.remove("active");
    menuMobile.classList.remove("active");
    mainContainer.classList.remove("active");
});

let body = document.querySelector("body");

body.addEventListener("click", () => {
    burger.classList.toggle("lock");
})