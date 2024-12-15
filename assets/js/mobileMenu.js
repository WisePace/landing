document.addEventListener('DOMContentLoaded', (event) => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Adjust scroll position for navigation links
  const navbarLinks = document.querySelectorAll('nav a, #mobile-menu a');
  navbarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          const href = link.getAttribute('href');
          if (href === "#") {
              // Special case for logo link to scroll to top
              event.preventDefault();
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
          } else {
              event.preventDefault();
              const targetId = href.substring(1);
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
                  const offset = 100; // Adjust this value to create more space on top
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;

                  window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                  });

                  // Close mobile menu after clicking a link
                  if (!mobileMenu.classList.contains('hidden')) {
                      mobileMenu.classList.add('hidden');
                  }
              }
          }
      });
  });
});