// Function to set theme using CSS variables
function setTheme(theme) {
    // Switch theme - CSS imports already provide the variables
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update CSS variables
    document.documentElement.style.setProperty('--color-bg', `var(--${theme}2)`);
    document.documentElement.style.setProperty('--color-text', `var(--${theme}11)`);
    document.documentElement.style.setProperty('--color-border', `var(--${theme}6)`);
    document.documentElement.style.setProperty('--color-hover', `var(--${theme}4)`);
    document.documentElement.style.setProperty('--color-container-hover', `var(--${theme}3)`);
    
    // For debugging
    console.log(`Setting theme to ${theme}`);
    console.log(`--${theme}2: ${getComputedStyle(document.documentElement).getPropertyValue(`--${theme}2`)}`);
    console.log(`--color-bg: ${getComputedStyle(document.documentElement).getPropertyValue('--color-bg')}`);
}

// Set initial theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTheme('blue');
    
    // Create a better color switcher
    const colorSwitcher = document.createElement('div');
    colorSwitcher.className = 'color-switcher';
    colorSwitcher.innerHTML = `
        <div class="switcher-label">Theme</div>
        <div class="color-options">
            <div class="color-option blue active" data-theme="blue"></div>
            <div class="color-option green" data-theme="green"></div>
            <div class="color-option gray" data-theme="gray"></div>
            <div class="color-option red" data-theme="red"></div>
            <div class="color-option pink" data-theme="pink"></div>
            <div class="color-option purple" data-theme="purple"></div>
            <div class="color-option teal" data-theme="teal"></div>
            <div class="color-option orange" data-theme="orange"></div>
            <div class="color-option yellow" data-theme="yellow"></div>
        </div>
    `;
    document.body.appendChild(colorSwitcher);
    
    // Add event listeners to color options
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to selected option
            option.classList.add('active');
            
            // Get and apply the selected theme
            const newTheme = option.getAttribute('data-theme');
            setTheme(newTheme);
        });
    });
});

document.querySelector('.header').addEventListener('click', function() {
    const tasks = document.getElementById('tasks');
    tasks.classList.toggle('collapsed');
    const caret = document.getElementById('caret');
    caret.classList.toggle('ph-caret-down');
    caret.classList.toggle('ph-caret-right');
});

document.getElementById('project-title').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the collapse when editing the title
});

document.getElementById('project-title').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents creating a new line
        this.blur(); // Ends editing
    }
});

document.querySelectorAll('.box h3').forEach((element) => {
    element.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the collapse when editing
    });

    element.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents creating a new line
            this.blur(); // Ends editing
        }
    });
}); 