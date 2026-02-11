'use strict';

// Form Handling
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Logic to handle form submission
        const formData = new FormData(form);
        console.log('Form submitted:', Object.fromEntries(formData));
    });
});

// Navigation
function navigateTo(page) {
    window.location.href = page + '.html';
}

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
        const page = item.getAttribute('data-page');
        navigateTo(page);
    });
});

// Animations
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();
        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    tick();
}

// Initialize animations on load
window.onload = function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(fadeIn);
};

// Interactive Features
document.querySelectorAll('.interactive').forEach(item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('hover');
    });
    item.addEventListener('mouseout', function() {
        item.classList.remove('hover');
    });
});
