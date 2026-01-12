const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});
}
document.addEventListener("DOMContentLoaded", () => {
const audio = document.getElementById("lsCamSound");
const playBtn = document.getElementById("lsPlay");
const muteBtn = document.getElementById("lsMute");
const volumeSlider = document.getElementById("lsVolume");

if (!audio || !playBtn || !muteBtn || !volumeSlider) return;

audio.volume = 0.5;
audio.loop = true;

playBtn.addEventListener("click", () => {
if (audio.paused) {
audio.play().catch(() => {});
playBtn.textContent = "⏸";
} else {
audio.pause();
playBtn.textContent = "▶";
}
});

muteBtn.addEventListener("click", () => {
audio.muted = !audio.muted;
muteBtn.textContent = audio.muted ? "🔊" : "🔇";
});

volumeSlider.addEventListener("input", (e) => {
audio.volume = e.target.value;
});
});
