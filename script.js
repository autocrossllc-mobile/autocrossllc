const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", (e) => {
e.stopPropagation();
mobileMenu.classList.toggle("active");
});

/* TAP OUTSIDE TO CLOSE */
document.addEventListener("click", (e) => {
if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
mobileMenu.classList.remove("active");
}
});
