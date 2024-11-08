document.addEventListener('DOMContentLoaded', function() {
    const mobileContactLink = document.getElementById('mobileContactLink');
    const navbar = document.getElementById('mainNav');
    const navLogo = document.getElementById('navLogo');
    const navLinks = document.querySelectorAll('.nav-link');
    const heroSection = document.getElementById('home');

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - (navbar ? navbar.offsetHeight : 0),
            behavior: 'smooth'
        });
    }

    mobileContactLink.addEventListener('click', smoothScroll);
    
    function updateNavbar() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= heroBottom - navbar.offsetHeight) {
            // Not in hero section
            navbar.classList.add('bg-white', 'dark:bg-gray-800');
            navLogo.classList.remove('text-white');
            navLogo.classList.add('text-gray-800', 'dark:text-white');
            navLinks.forEach(link => {
                link.classList.remove('text-white', 'hover:text-blue-400');
                link.classList.add('text-gray-600', 'dark:text-white', 'hover:text-gray-900', 'dark:hover:text-gray-300');
            });
        } else {
            // In hero section
            navbar.classList.remove('bg-white', 'dark:bg-gray-800');
            navLogo.classList.add('text-white');
            navLogo.classList.remove('text-gray-800', 'dark:text-white');
            navLinks.forEach(link => {
                link.classList.add('text-white', 'hover:text-blue-400');
                link.classList.remove('text-gray-600', 'dark:text-white', 'hover:text-gray-900', 'dark:hover:text-gray-300');
            });
        }
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight,
            behavior: 'smooth'
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Call once to set initial state
});