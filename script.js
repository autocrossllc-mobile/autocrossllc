function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 10);
});
