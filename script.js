// Smooth scrolling
document.querySelectorAll('.nav-links a, .hero-buttons a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Navbar shadow while scrolling
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Skill animation
const skillBars = document.querySelectorAll('.progress-bar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    observer.observe(bar);
});


// Current year automatically
const year = document.querySelector('footer p');

if (year) {
    year.innerHTML = `© ${new Date().getFullYear()} Mukilan. All Rights Reserved.`;
}


// Mobile menu
const navLinks = document.querySelector('.nav-links');

const menuButton = document.createElement('button');
menuButton.innerHTML = '☰';
menuButton.classList.add('menu-button');

document.querySelector('.navbar').appendChild(menuButton);

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Close mobile menu after clicking
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});