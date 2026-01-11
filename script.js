const logo = document.querySelector(".logo-bounce");
const isHome = document.body.classList.contains("home");

if (isHome && logo) {
let x = 60;
let y = 60;
let dx = 2.2;
let dy = 2.0;

const hero = document.querySelector(".hero");
const startTime = Date.now();
const bounceDuration = 8000; // 8 seconds

function animateLogo() {
const now = Date.now();

if (now - startTime > bounceDuration) {
// LOCK LOGO TOP LEFT AFTER BOUNCE
logo.style.position = "fixed";
logo.style.top = "14px";
logo.style.left = "14px";
logo.style.transform = "translate(0,0)";
return;
}

const heroRect = hero.getBoundingClientRect();
const logoRect = logo.getBoundingClientRect();

x += dx;
y += dy;

if (x + logoRect.width >= heroRect.width || x <= 0) dx *= -1;
if (y + logoRect.height >= heroRect.height || y <= 0) dy *= -1;

logo.style.transform = `translate(${x}px, ${y}px)`;

requestAnimationFrame(animateLogo);
}

animateLogo();
}
