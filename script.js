document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (!menuToggle || !mobileMenu) return;

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});

// Close menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach(link => {
link.addEventListener("click", () => {
mobileMenu.classList.remove("active");
});
});
});
