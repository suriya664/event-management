/**
 * ==============================================
 * EVENT MANAGEMENT / CONFERENCE TEMPLATE
 * Plugin Initialization - plugins.js
 * Third-Party Library Setup
 * ==============================================
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all plugins when DOM is ready
        initOwlCarousel();
        initMagnificPopup();
        initIsotope();
        initParticles();
    });

    // ========== Owl Carousel Initialization ==========
    function initOwlCarousel() {
        // Check if Owl Carousel library is loaded
        if (typeof jQuery === 'undefined' || typeof jQuery.fn.owlCarousel === 'undefined') {
            console.log('Owl Carousel not loaded');
            return;
        }

        // Speakers Carousel
        if (jQuery('.speakers-carousel').length) {
            jQuery('.speakers-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }

        // Sponsors Carousel
        if (jQuery('.sponsors-carousel').length) {
            jQuery('.sponsors-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }

        // Testimonials Carousel
        if (jQuery('.testimonials-carousel').length) {
            jQuery('.testimonials-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 6000,
                items: 1,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn'
            });
        }
    }

    // ========== Magnific Popup (Lightbox) ==========
    function initMagnificPopup() {
        // Check if Magnific Popup library is loaded
        if (typeof jQuery === 'undefined' || typeof jQuery.fn.magnificPopup === 'undefined') {
            console.log('Magnific Popup not loaded');
            return;
        }

        // Gallery Image Popup
        if (jQuery('.gallery-item').length) {
            jQuery('.gallery-item').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                image: {
                    titleSrc: 'title',
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out'
                }
            });
        }

        // Video Popup
        if (jQuery('.video-popup').length) {
            jQuery('.video-popup').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/',
                            id: 'v=',
                            src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: '/',
                            src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                        }
                    }
                }
            });
        }
    }

    // ========== Isotope (Filtering and Sorting) ==========
    function initIsotope() {
        // Pure JavaScript implementation (no jQuery dependency)
        const galleryGrid = document.querySelector('.gallery-grid');
        if (!galleryGrid) return;

        // Simple filtering without Isotope library
        const filterButtons = document.querySelectorAll('.gallery-filters .btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter items
                galleryItems.forEach(function(item) {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Note: For advanced grid layouts with animation, include Isotope.js library
        /*
        if (typeof Isotope !== 'undefined') {
            const iso = new Isotope(galleryGrid, {
                itemSelector: '.gallery-item',
                layoutMode: 'fitRows'
            });

            filterButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    const filterValue = this.getAttribute('data-filter');
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    iso.arrange({ filter: filterValue === 'all' ? '*' : '.' + filterValue });
                });
            });
        }
        */
    }

    // ========== Particles Background ==========
    function initParticles() {
        // Simple particle effect without external library
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection || !document.getElementById('particles-js')) return;

        // Note: For advanced particle effects, include particles.js library
        // Example configuration:
        /*
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.5,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
        }
        */
    }

    // ========== CounterUp Animation ==========
    window.initCounterUp = function() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
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

            // Start animation when element is in viewport
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    };

    // ========== Google Maps Integration ==========
    window.initMap = function() {
        // Check if Google Maps API is loaded
        if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
            console.log('Google Maps API not loaded');
            return;
        }

        const mapElement = document.getElementById('map');
        if (!mapElement) return;

        // Example coordinates (India Gate, New Delhi)
        const eventLocation = { lat: 28.6129, lng: 77.2295 };

        const map = new google.maps.Map(mapElement, {
            center: eventLocation,
            zoom: 15,
            styles: [
                {
                    featureType: 'all',
                    elementType: 'geometry',
                    stylers: [{ color: '#f5f5f5' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#e9e9e9' }]
                }
            ]
        });

        // Add marker
        const marker = new google.maps.Marker({
            position: eventLocation,
            map: map,
            title: 'Event Venue',
            animation: google.maps.Animation.DROP
        });

        // Info window
        const infoWindow = new google.maps.InfoWindow({
            content: '<div style="padding: 10px;"><h5>Event Venue</h5><p>123 Conference Center, New Delhi</p></div>'
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    };

    // ========== Lazy Loading Images ==========
    window.initLazyLoad = function() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    };

})();

