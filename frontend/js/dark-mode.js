// frontend/js/dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('#theme-toggle');
    const body = document.body;
    
    const applyTheme = (theme) => {
        const moonIcons = document.querySelectorAll('#theme-toggle .fa-moon, .theme-toggle-btn .fa-moon');
        const sunIcons = document.querySelectorAll('#theme-toggle .fa-sun, .theme-toggle-btn .fa-sun');
        const themeLabels = document.querySelectorAll('#theme-toggle .hidden-sidebar'); // For admin sidebar

        if (theme === 'dark') {
            body.classList.add('dark-mode');
            moonIcons.forEach(icon => icon.style.display = 'none');
            sunIcons.forEach(icon => icon.style.display = 'block');
            themeLabels.forEach(label => label.textContent = 'Chế độ sáng');
        } else {
            body.classList.remove('dark-mode');
            moonIcons.forEach(icon => icon.style.display = 'block');
            sunIcons.forEach(icon => icon.style.display = 'none');
            themeLabels.forEach(label => label.textContent = 'Chế độ tối');
        }
    };

    const toggleTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        });
    });

    // On page load, check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (systemPrefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
});