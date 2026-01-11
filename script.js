const logo = document.getElementById("mainLogo");
const lsLogo = document.getElementById("lsLogo");
const mobileMenu = document.getElementById("mobileMenu");

// MOBILE MENU
function toggleMenu() {
mobileMenu.classList.toggle("active");
}

// RANDOM FLOATING MOTION
function floatAround(el) {
let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 100);

el.style.left = x + "px";
el.style.top = y + "px";
}

// START FLOATING
let logoInterval = setInterval(() => floatAround(logo), 700);
let lsInterval = setInterval(() => floatAround(lsLogo), 700);

// STOP AFTER 8 SECONDS
setTimeout(() => {
clearInterval(logoInterval);
clearInterval(lsInterval);

logo.classList.add("logo-locked");
lsLogo.classList.add("ls-locked");

logo.style.transition = "all 1s ease";
lsLogo.style.transition = "all 1s ease";

}, 8000);
