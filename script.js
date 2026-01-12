document.addEventListener("DOMContentLoaded", () => {
const audio = document.getElementById("lsCamSound");
const playBtn = document.getElementById("lsPlay");
const muteBtn = document.getElementById("lsMute");
const volume = document.getElementById("lsVolume");

if (!audio || !playBtn || !muteBtn || !volume) return;

audio.volume = 0.6;
audio.loop = true;

// PLAY / PAUSE (USER TAP REQUIRED FOR MOBILE)
playBtn.addEventListener("click", () => {
if (audio.paused) {
audio.play().then(() => {
playBtn.textContent = "⏸";
}).catch(() => {});
} else {
audio.pause();
playBtn.textContent = "▶";
}
});

// MUTE
muteBtn.addEventListener("click", () => {
audio.muted = !audio.muted;
muteBtn.textContent = audio.muted ? "🔊" : "🔇";
});

// VOLUME
volume.addEventListener("input", (e) => {
audio.volume = e.target.value;
});
});
