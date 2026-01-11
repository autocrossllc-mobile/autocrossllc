const logo = document.querySelector(".logo-bounce");
const hero = document.querySelector(".hero");

let x = 60;
let y = 60;
let dx = 2.8;
let dy = 2.4;

function animateLogo() {
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
