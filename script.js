document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide menu
        mobileMenu.classList.toggle('active');
        
        // Optional: Change button text
        if (mobileMenu.classList.contains('active')) {
            menuToggle.textContent = 'CLOSE';
        } else {
            menuToggle.textContent = 'MENU';
        }
    });
});
