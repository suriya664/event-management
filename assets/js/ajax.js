/**
 * ==============================================
 * EVENT MANAGEMENT / CONFERENCE TEMPLATE
 * AJAX Functionality - ajax.js
 * Contact Form & Registration Submissions
 * ==============================================
 */

(function() {
    'use strict';

    // ========== Contact Form Submission ==========
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (!validateForm('contact-form')) {
                showAlert('Please fill in all required fields correctly.', 'danger');
                return;
            }

            // Get form data
            const formData = {
                name: document.getElementById('contact-name').value,
                email: document.getElementById('contact-email').value,
                phone: document.getElementById('contact-phone').value,
                subject: document.getElementById('contact-subject').value,
                message: document.getElementById('contact-message').value
            };

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate AJAX request (Replace with actual API endpoint)
            setTimeout(function() {
                // Success response simulation
                console.log('Contact Form Data:', formData);
                
                showAlert('Thank you for contacting us! We will get back to you soon.', 'success');
                contactForm.reset();
                
                // Remove validation classes
                contactForm.querySelectorAll('.is-valid, .is-invalid').forEach(function(el) {
                    el.classList.remove('is-valid', 'is-invalid');
                });

                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 2000);

            // Uncomment below for real AJAX implementation
            /*
            fetch('your-api-endpoint/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showAlert('Thank you for contacting us! We will get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    showAlert('Something went wrong. Please try again.', 'danger');
                }
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                showAlert('Network error. Please try again.', 'danger');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
            */
        });
    }

    // ========== Event Registration Form ==========
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (!validateForm('register-form')) {
                showAlert('Please fill in all required fields correctly.', 'danger');
                return;
            }

            // Get form data
            const formData = {
                fullName: document.getElementById('register-name').value,
                email: document.getElementById('register-email').value,
                phone: document.getElementById('register-phone').value,
                organization: document.getElementById('register-organization').value,
                designation: document.getElementById('register-designation').value,
                ticketType: document.getElementById('register-ticket').value,
                dietaryReq: document.getElementById('register-dietary')?.value || '',
                specialReq: document.getElementById('register-special')?.value || ''
            };

            // Show loading state
            const submitBtn = registerForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;

            // Simulate AJAX request (Replace with actual API endpoint)
            setTimeout(function() {
                // Success response simulation
                console.log('Registration Data:', formData);
                
                // Close modal if exists
                const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
                if (modal) {
                    modal.hide();
                }

                showAlert('Registration successful! Check your email for confirmation.', 'success');
                registerForm.reset();

                // Redirect to dashboard or thank you page after delay
                setTimeout(function() {
                    // window.location.href = 'dashboard.html';
                }, 2000);

                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 2000);

            // Uncomment below for real AJAX implementation
            /*
            fetch('your-api-endpoint/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showAlert('Registration successful! Check your email for confirmation.', 'success');
                    registerForm.reset();
                    // Redirect to dashboard
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 2000);
                } else {
                    showAlert(data.message || 'Registration failed. Please try again.', 'danger');
                }
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                showAlert('Network error. Please try again.', 'danger');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
            */
        });
    }

    // ========== Login Form ==========
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (!validateForm('login-form')) {
                showAlert('Please fill in all fields.', 'danger');
                return;
            }

            // Get credentials
            const credentials = {
                email: document.getElementById('login-email').value,
                password: document.getElementById('login-password').value,
                remember: document.getElementById('remember-me')?.checked || false
            };

            // Show loading state
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
            submitBtn.disabled = true;

            // Simulate AJAX request (Replace with actual API endpoint)
            setTimeout(function() {
                // Success response simulation
                console.log('Login Credentials:', credentials);
                
                showAlert('Login successful! Redirecting...', 'success');
                
                // Redirect to dashboard
                setTimeout(function() {
                    window.location.href = 'pages/dashboard.html';
                }, 1500);
            }, 2000);

            // Uncomment below for real AJAX implementation
            /*
            fetch('your-api-endpoint/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('authToken', data.token);
                    showAlert('Login successful! Redirecting...', 'success');
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1500);
                } else {
                    showAlert('Invalid credentials. Please try again.', 'danger');
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showAlert('Network error. Please try again.', 'danger');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
            */
        });
    }

    // ========== Newsletter Subscription ==========
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('newsletter-email');
            const email = emailInput.value;

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showAlert('Please enter a valid email address.', 'danger');
                return;
            }

            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Simulate AJAX request
            setTimeout(function() {
                console.log('Newsletter Subscription:', email);
                showAlert('Thank you for subscribing to our newsletter!', 'success');
                newsletterForm.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);

            // Uncomment below for real AJAX implementation
            /*
            fetch('your-api-endpoint/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showAlert('Thank you for subscribing to our newsletter!', 'success');
                    newsletterForm.reset();
                } else {
                    showAlert('Subscription failed. Please try again.', 'danger');
                }
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            })
            .catch(error => {
                console.error('Error:', error);
                showAlert('Network error. Please try again.', 'danger');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
            */
        });
    }

    // ========== Ticket Purchase Handler ==========
    window.purchaseTicket = function(ticketType, price) {
        // Store ticket info in sessionStorage
        sessionStorage.setItem('selectedTicket', JSON.stringify({
            type: ticketType,
            price: price
        }));

        // Redirect to registration page
        window.location.href = 'register.html';
    };

    // ========== Load Selected Ticket on Registration Page ==========
    if (window.location.pathname.includes('register.html')) {
        const selectedTicket = JSON.parse(sessionStorage.getItem('selectedTicket'));
        if (selectedTicket && document.getElementById('register-ticket')) {
            document.getElementById('register-ticket').value = selectedTicket.type;
            
            // Display ticket info
            const ticketInfo = document.getElementById('selected-ticket-info');
            if (ticketInfo) {
                ticketInfo.innerHTML = `
                    <div class="alert alert-info">
                        <strong>Selected Ticket:</strong> ${selectedTicket.type} - ₹${selectedTicket.price}
                    </div>
                `;
            }
        }
    }

})();

