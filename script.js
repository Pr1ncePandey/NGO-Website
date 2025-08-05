// Mobile menu toggle
const navLinks = document.getElementById('nav-links');
const menuToggle = document.querySelector('.menu-toggle');

function toggleMenu() {
    navLinks.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        }
    });
});

// Smooth scrolling for CTA buttons
document.querySelectorAll('.volunteer-btn a, .learn-more-btn a').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const volunteerForm = document.querySelector('.volunteer-form');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your interest in volunteering! We will contact you soon.');
        this.reset();
    });
}