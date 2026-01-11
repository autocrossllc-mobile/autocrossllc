document.addEventListener("DOMContentLoaded", () => {
const logo = document.getElementById("mainLogo");
const lsLogo = document.getElementById("lsLogo");
const mobileMenu = document.getElementById("mobileMenu");

window.toggleMenu = () => {
mobileMenu.classList.toggle("active");
};

function floatAround(el) {
const x = Math.random() * (window.innerWidth - 100);
const y = Math.random() * (window.innerHeight - 100);
el.style.left = x + "px";
el.style.top = y + "px";
}

const logoInterval = setInterval(() => floatAround(logo), 700);
const lsInterval = setInterval(() => floatAround(lsLogo), 700);

setTimeout(() => {
clearInterval(logoInterval);
clearInterval(lsInterval);

logo.classList.add("logo-locked");
lsLogo.classList.add("ls-locked");
}, 8000);
});
