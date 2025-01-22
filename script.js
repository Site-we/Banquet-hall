// Wait for the window to fully load
window.addEventListener('load', () => {
    // Remove the preloader after a delay
    const preloader = document.getElementById('preloader');
    document.body.classList.remove('loading');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 3000); // Matches animation delay in CSS
});

// Handle form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
});
