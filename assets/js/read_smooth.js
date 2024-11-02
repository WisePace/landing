document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scroll for Read More button
    const readMoreButton = document.getElementById('read-more-button');
    if (readMoreButton) {
        readMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});