document.addEventListener('DOMContentLoaded', (event) => {
    const sectionsToggle = document.getElementById('sectionsToggle');
    const sectionsDropdown = sectionsToggle.querySelector('.sections-dropdown');

    sectionsToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sectionsDropdown.style.display = sectionsDropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close sections dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!sectionsToggle.contains(e.target)) {
            sectionsDropdown.style.display = 'none';
        }
    });

    // Highlight active section in bottom nav
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const sections = document.querySelectorAll('section');

    function highlightActiveSection() {
        let current = '';
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        bottomNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call once to set initial state
});
