document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (!menuToggle || !mobileMenu) return;

menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});

// Close menu when link is clicked (mobile UX)
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach(link => {
link.addEventListener("click", () => {
mobileMenu.classList.remove("active");
});
});
});
