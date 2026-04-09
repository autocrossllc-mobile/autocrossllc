document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuToggle || !mobileMenu) return;

    // Toggle mobile menu
    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents immediate closing if you use the outside-click logic
        mobileMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // Close menu if clicking anywhere outside the menu
    document.addEventListener("click", (e) => {
        if (mobileMenu.classList.contains("active") && !mobileMenu.contains(e.target) && e.target !== menuToggle) {
            mobileMenu.classList.remove("active");
        }
    });
});
