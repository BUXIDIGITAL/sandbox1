// Landing Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and template cards
    document.querySelectorAll('.feature-card, .template-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const nav = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            // Mobile menu logic can be added here if needed
        }
    };

    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();

    // Add active state to navigation on scroll
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // Stats counter animation
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = stat.textContent;
            if (target.includes('+')) {
                const number = parseInt(target.replace(/\D/g, ''));
                animateNumber(stat, 0, number, 2000, '+');
            }
        });
    };

    const animateNumber = (element, start, end, duration, suffix = '') => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = end.toLocaleString() + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString() + suffix;
            }
        }, 16);
    };

    // Trigger stats animation when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});
