const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});