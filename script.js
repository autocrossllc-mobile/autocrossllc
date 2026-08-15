document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. MOBILE MENU TOGGLE
       ========================================== */
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) { 
        menuToggle.addEventListener('click', () => { 
            mobileMenu.classList.toggle('active'); 
        }); 
    }


    /* ==========================================
       2. CONTACT FORM VALIDATION
       ========================================== */
    const contactForm = document.querySelector('form'); // Targets your contact form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const phoneInput = contactForm.querySelector('input[name="phone"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            
            // Check if both phone and email are empty
            const phoneVal = phoneInput ? phoneInput.value.trim() : '';
            const emailVal = emailInput ? emailInput.value.trim() : '';

            if (!phoneVal && !emailVal) {
                e.preventDefault(); // Stop form from submitting
                alert('⚠️ Please provide at least a phone number or email address so AutoCross LLC can get back to you!');
                if (phoneInput) phoneInput.focus();
            }
        });
    }


    /* ==========================================
       3. INTERACTIVE QUOTE CALCULATOR
       ========================================== */
    const serviceSelect = document.getElementById('calculatorService');
    const quotePriceDisplay = document.getElementById('quotePrice');

    if (serviceSelect && quotePriceDisplay) {
        serviceSelect.addEventListener('change', (e) => {
            const selectedOption = e.target.options[e.target.selectedIndex];
            const price = selectedOption.getAttribute('data-price');
            const isRange = selectedOption.getAttribute('data-range') === 'true';
            
            quotePriceDisplay.textContent = '$' + parseInt(price).toLocaleString() + (isRange ? '+' : '');
        });
    }


    /* ==========================================
       4. FULL-SCREEN IMAGE LIGHTBOX (GALLERY)
       ========================================== */
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    if (galleryImages.length > 0) {
        // Create lightbox container dynamically
        const lightbox = document.createElement('div');
        lightbox.id = 'imageLightbox';
        lightbox.style.cssText = 'display:none; position:fixed; z-index:9999; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.92); justify-content:center; align-items:center; cursor:pointer; padding:20px;';
        
        const lightboxImg = document.createElement('img');
        lightboxImg.style.cssText = 'max-width:90%; max-height:90%; border:2px solid #ff0033; box-shadow:0 0 35px rgba(255,0,51,0.4); object-fit:contain;';
        
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.style.display = 'flex';
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

});
