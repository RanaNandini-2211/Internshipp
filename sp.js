document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        alert('Form submitted successfully!');
        form.reset();
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Interactive menu
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('visible');
    });

    // Dynamic content update
    const updateButton = document.getElementById('update-content');
    const dynamicContent = document.getElementById('dynamic-content');
    updateButton.addEventListener('click', () => {
        dynamicContent.innerHTML = '<p>Content updated dynamically!</p>';
    });
});
