document.addEventListener('DOMContentLoaded', (event) => {
    const sectionsToggle = document.getElementById('sectionsToggle');
    const sectionsDropdown = sectionsToggle.querySelector('.sections-dropdown');

    sectionsToggle.addEventListener('click', (e) => {
        e.preventDefault();
        sectionsDropdown.style.display = sectionsDropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    // Handle section link clicks
    const sectionLinks = sectionsDropdown.querySelectorAll('a');
    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
