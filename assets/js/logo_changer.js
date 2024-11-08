document.addEventListener('DOMContentLoaded', function() {
    const logoImage = document.getElementById('logoImage');
    const homeSection = document.getElementById('home');
    const footerLogo = document.getElementById('footerLogo');

    function updateLogo() {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;
        const isDarkMode = document.documentElement.classList.contains('dark');
        
        if (!isDarkMode) {
            if (homeSectionBottom > 0) {
                logoImage.src = '/assets/img/logo_white.svg';
                footerLogo.src = '/assets/img/logo_white.svg';
            } else {
                logoImage.src = '/assets/img/logo_black.svg';
                footerLogo.src = '/assets/img/logo_black.svg';
            }
        } else {
            logoImage.src = '/assets/img/logo_white.svg';
            footerLogo.src = '/assets/img/logo_white.svg';
        }
    }

    // Initial check
    updateLogo();

    // Listen for scroll events
    window.addEventListener('scroll', updateLogo);
});