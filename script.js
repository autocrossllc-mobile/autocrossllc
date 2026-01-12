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

/* DEFAULT SETTINGS */
audio.volume = 0.45;
audio.loop = true;

/* PLAY / PAUSE */
playBtn.addEventListener("click", () => {
if (audio.paused) {
audio.play().catch(() => {});
playBtn.textContent = "⏸";
} else {
audio.pause();
playBtn.textContent = "▶";
}
});

/* MUTE */
muteBtn.addEventListener("click", () => {
audio.muted = !audio.muted;
muteBtn.textContent = audio.muted ? "🔊" : "🔇";
});

/* VOLUME */
volumeSlider.addEventListener("input", (e) => {
audio.volume = e.target.value;
});
});
