document.addEventListener("DOMContentLoaded", () => {
const audio = document.getElementById("lsCamSound");
const playBtn = document.getElementById("lsPlay");
const muteBtn = document.getElementById("lsMute");
const volumeSlider = document.getElementById("lsVolume");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

/* MENU TOGGLE */
if (menuToggle && mobileMenu) {
menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("active");
});
}

/* AUDIO GUARD */
if (!audio || !playBtn || !muteBtn || !volumeSlider) return;

audio.volume = 0.5;
audio.loop = true;

/* PLAY / PAUSE */
playBtn.addEventListener("click", () => {
if (audio.paused) {
audio.play();
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
