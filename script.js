// Toggle menu when hamburger icon is clicked
var menuToggle = document.querySelector(".menu-toggle");
var menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("menu-open");
    menu.classList.toggle("menu-open");
});
