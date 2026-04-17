document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                mobileMenu.classList.remove("active");
            });
        });

        document.addEventListener("click", function (e) {
            if (
                mobileMenu.classList.contains("active") &&
                !mobileMenu.contains(e.target) &&
                e.target !== menuToggle
            ) {
                mobileMenu.classList.remove("active");
            }
        });
    }

});