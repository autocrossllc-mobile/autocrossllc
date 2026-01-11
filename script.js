const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});
const lsCards = document.querySelectorAll(".ls-card");

const revealCards = () => {
lsCards.forEach(card => {
const cardTop = card.getBoundingClientRect().top;
const triggerPoint = window.innerHeight - 80;

if (cardTop < triggerPoint) {
card.classList.add("show");
}
});
};

window.addEventListener("scroll", revealCards);
revealCards();
