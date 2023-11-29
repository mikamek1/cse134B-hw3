document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.createElement('div');
    themeToggle.className = 'toggle-container';
    themeToggle.innerHTML = `
        <label class="switch">
            <input type="checkbox" id="theme-toggle">
            <span class="slider"></span>
        </label>
        <span id="theme-label">Light Mode</span>
    `;
    document.body.appendChild(themeToggle);

    const themeToggleCheckbox = document.getElementById('theme-toggle');
    const themeLabel = document.getElementById('theme-label');

    // Check if there is a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeLabel.textContent = `${savedTheme === 'dark-mode' ? 'Dark' : 'Light'} Mode`;
        themeToggleCheckbox.checked = savedTheme === 'dark-mode';
    }

    // Toggle theme on checkbox change
    themeToggleCheckbox.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';

        // Save the theme preference to localStorage
        localStorage.setItem('theme', currentTheme);

        themeLabel.textContent = `${currentTheme === 'dark-mode' ? 'Dark' : 'Light'} Mode`;
    });
});
