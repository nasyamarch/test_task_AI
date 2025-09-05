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


const popup = document.querySelector(".pop-up");
const bannerButton = document.querySelector(".top-banner_button"); // Кнопка, чтобы открыть
const crossModal = document.querySelector(".pop-up_cross");

if (bannerButton) {
    bannerButton.addEventListener("click", () => {
        popup.classList.add("active");
    });
}

crossModal.addEventListener("click", () => {
    popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});


const form = document.querySelector(".pop-up_form");
const emailInput = document.querySelector(".form_input");
const emailError = document.querySelector(".form_error");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!emailInput.checkValidity()) {
        emailInput.classList.add("form_input__error");
        emailError.style.display = "inline";
        emailInput.blur();
    } else {
        emailError.style.display = "none";
        emailInput.classList.remove("form_input__error");
    }
});

emailInput.addEventListener("input", function () {
    if (emailInput.checkValidity()) {
        emailInput.classList.remove("form_input__error");
        emailError.style.display = "none";
    }
});