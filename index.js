// Keep all your existing JavaScript code

// Add this new function at the end of your file
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav_links');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupSmoothScrolling);
