function updateDarkModeIcon(isDark) {
    const icons = document.querySelectorAll('#darkModeIcon, #darkModeIconMobile');
    icons.forEach(icon => {
        if (isDark) {
            icon.classList.remove('fa-star');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-star');
        }
    });
}

function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    updateDarkModeIcon(isDark);
    localStorage.setItem('darkMode', isDark);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeSaved = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', darkModeSaved);
    updateDarkModeIcon(darkModeSaved);

    const darkModeToggles = document.querySelectorAll('#darkModeToggle, #darkModeToggleMobile');
    darkModeToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleDarkMode);
    });
});