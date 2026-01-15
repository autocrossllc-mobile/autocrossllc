document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (!menuToggle || !mobileMenu) return;

menuToggle.addEventListener("click", (e) => {
e.stopPropagation();
mobileMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
mobileMenu.classList.remove("active");
});

mobileMenu.addEventListener("click", (e) => {
e.stopPropagation();
});
});
<script>
document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});
}
});
</script>
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});
}
