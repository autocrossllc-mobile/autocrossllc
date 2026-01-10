const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
