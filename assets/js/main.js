/**
 * ==============================================
 * EVENT MANAGEMENT / CONFERENCE TEMPLATE
 * Main JavaScript - main.js
 * Core Functionality and Interactivity
 * ==============================================
 */

(function() {
    'use strict';

    // ========== Document Ready ==========
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all functions
        initNavbar();
        initCountdown();
        initScrollAnimations();
        initScheduleFilters();
        initGalleryFilters();
        initThemeToggle();
        initSmoothScroll();
        initBackToTop();
        initStatCounters();
        initTooltips();
    });

    // ========== Sticky Navbar on Scroll ==========
    function initNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Close mobile menu when link is clicked
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const navCollapse = document.querySelector('.navbar-collapse');
        
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navCollapse, {
                        toggle: true
                    });
                }
            });
        });

        // Set active nav link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(function(link) {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // ========== Countdown Timer ==========
    function initCountdown() {
        const countdownElements = {
            days: document.getElementById('countdown-days'),
            hours: document.getElementById('countdown-hours'),
            minutes: document.getElementById('countdown-minutes'),
            seconds: document.getElementById('countdown-seconds')
        };

        // Check if countdown elements exist
        if (!countdownElements.days) return;

        // Set event date (14 October 2025, 10:00 AM)
        const eventDate = new Date('2025-10-14T10:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                document.querySelector('.countdown-timer').innerHTML = '<h3>Event Started!</h3>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElements.days.textContent = days;
            countdownElements.hours.textContent = hours;
            countdownElements.minutes.textContent = minutes;
            countdownElements.seconds.textContent = seconds;
        }

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }

    // ========== Scroll Animations (AOS alternative) ==========
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.speaker-card, .schedule-item, .ticket-card, .blog-card, .gallery-item');
        
        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        animatedElements.forEach(function(element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // ========== Schedule Day Filters ==========
    function initScheduleFilters() {
        const filterButtons = document.querySelectorAll('.schedule-filters .btn');
        const scheduleDays = document.querySelectorAll('.schedule-day');

        if (filterButtons.length === 0) return;

        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const targetDay = this.getAttribute('data-day');

                // Remove active class from all buttons
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });

                // Add active class to clicked button
                this.classList.add('active');

                // Show/hide schedule days
                scheduleDays.forEach(function(day) {
                    if (day.getAttribute('data-day') === targetDay || targetDay === 'all') {
                        day.classList.add('active');
                    } else {
                        day.classList.remove('active');
                    }
                });
            });
        });

        // Show first day by default
        if (scheduleDays.length > 0) {
            scheduleDays[0].classList.add('active');
            filterButtons[0].classList.add('active');
        }
    }

    // ========== Gallery Filters ==========
    function initGalleryFilters() {
        const filterButtons = document.querySelectorAll('.gallery-filters .btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        if (filterButtons.length === 0) return;

        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');

                // Remove active class from all buttons
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });

                // Add active class to clicked button
                this.classList.add('active');

                // Filter gallery items
                galleryItems.forEach(function(item) {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block';
                        setTimeout(function() {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(function() {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Show all by default
        if (filterButtons.length > 0) {
            filterButtons[0].classList.add('active');
        }
    }

    // ========== Theme Toggle (Light/Dark Mode) ==========
    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        // Check for saved theme preference or default to 'light'
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);

        themeToggle.addEventListener('click', function() {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ========== Smooth Scroll for Anchor Links ==========
    function initSmoothScroll() {
        const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
        
        smoothScrollLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                if (targetId === '#' || targetId === '') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ========== Back to Top Button ==========
    function initBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        if (!backToTopBtn) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========== Animated Statistics Counters ==========
    function initStatCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (counters.length === 0) return;

        const animateCounter = function(counter) {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = function() {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function(counter) {
            observer.observe(counter);
        });
    }

    // ========== Initialize Bootstrap Tooltips ==========
    function initTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // ========== Form Validation ==========
    window.validateForm = function(formId) {
        const form = document.getElementById(formId);
        if (!form) return false;

        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        });

        // Email validation
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(function(input) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value && !emailPattern.test(input.value)) {
                input.classList.add('is-invalid');
                isValid = false;
            }
        });

        // Phone validation (Indian format: +91)
        const phoneInputs = form.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(function(input) {
            const phonePattern = /^(\+91)?[\s]?[6-9]\d{9}$/;
            if (input.value && !phonePattern.test(input.value.replace(/\s+/g, ''))) {
                input.classList.add('is-invalid');
                isValid = false;
            }
        });

        return isValid;
    };

    // ========== Show Alert Message ==========
    window.showAlert = function(message, type = 'success') {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
        alertDiv.style.zIndex = '9999';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(function() {
            alertDiv.remove();
        }, 5000);
    };

})();

