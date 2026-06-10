// document.addEventListener('DOMContentLoaded', () => {
//     const langSelect = document.getElementById('langSelect');
    
//     if (langSelect) {
//         langSelect.addEventListener('change', (event) => {
//             // The value element directly represents the destination target page filename
//             const targetPage = event.target.value;
//             window.location.href = targetPage;
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE HAMBURGER MENU ENGINE
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');
    const bodyElement = document.body;

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('menu-open');
            bodyElement.classList.toggle('no-scroll');
        });
    }

    // 2. 🚀 NEW: CUSTOM FLAG DROPDOWN SELECTOR ENGINE
    const langWrapper = document.querySelector('.language-selector');
    const langTrigger = document.getElementById('langTrigger');

    if (langTrigger && langWrapper) {
        // Toggle the open/close state of the dropdown menu on click
        langTrigger.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents instant closing on click trigger
            langWrapper.classList.toggle('active');
        });

        // Close the menu automatically if the user clicks anywhere else on the page
        document.addEventListener('click', (event) => {
            if (!langWrapper.contains(event.target)) {
                langWrapper.classList.remove('active');
            }
        });
    }
});

// 🚀 NEW: Scroll Detection Engine for Header Shadow Toggle
window.addEventListener('scroll', () => {
    const siteHeader = document.querySelector('.site-header');
    
    // If the page is scrolled down more than 20 pixels, inject the active class
    if (window.scrollY > 20) {
        siteHeader.classList.add('is-scrolled');
    } else {
        siteHeader.classList.remove('is-scrolled');
    }
});

// 🚀 NEW: Back to Top Button Engine Logic
document.addEventListener('DOMContentLoaded', () => {
    const topButton = document.getElementById('backToTopBtn');

    if (topButton) {
        // Monitor scrolling to toggle the button visibility state
        window.addEventListener('scroll', () => {
            // Show button after scrolling down 400px (past the main header area)
            if (window.scrollY > 400) {
                topButton.classList.add('show');
            } else {
                topButton.classList.remove('show');
            }
        });

        // Click execution to travel smoothly back to coordinates 0,0
        topButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' /* Ensures elegant scrolling path instead of snapping */
            });
        });
    }
});

