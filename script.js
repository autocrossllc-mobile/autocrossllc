const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu(e) {
e.preventDefault();
e.stopPropagation();
mobileMenu.classList.toggle("active");
}

/* iOS SAFE EVENTS */
menuToggle.addEventListener("touchstart", toggleMenu, { passive: false });
menuToggle.addEventListener("click", toggleMenu);

/* TAP OUTSIDE TO CLOSE */
document.addEventListener("touchstart", (e) => {
if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
mobileMenu.classList.remove("active");
}
}, { passive: true });

document.addEventListener("click", (e) => {
if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
mobileMenu.classList.remove("active");
}
});
document.querySelectorAll("#mobileMenu a").forEach(link => {
link.addEventListener("touchstart", () => {
mobileMenu.classList.remove("active");
});
link.addEventListener("click", () => {
mobileMenu.classList.remove("active");
});
});
