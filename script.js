const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});
}
/* ===== LS CAM SOUND (ONE TIME) ===== */
const lsSound = document.getElementById("lsCamSound");

let lsSoundPlayed = false;

const playLsSoundOnce = () => {
if (!lsSoundPlayed && lsSound) {
lsSound.volume = 0.5; // subtle, not loud
lsSound.play().catch(() => {});
lsSoundPlayed = true;

// stop after ~6 seconds (safe)
setTimeout(() => {
lsSound.pause();
lsSound.currentTime = 0;
}, 6000);
}
};

/* trigger on first user interaction */
document.addEventListener("click", playLsSoundOnce, { once: true });
document.addEventListener("touchstart", playLsSoundOnce, { once: true });
