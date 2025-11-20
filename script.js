        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuButton.addEventListener('click', () => {
                if (mobileMenu.style.display === 'block') {
                    mobileMenu.style.display = 'none';
                } else {
                    mobileMenu.style.display = 'block';
                }
            });

            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.style.display = 'none';
                });
            });

            const contactForm = document.getElementById('contact-form');
            const submissionMessage = document.getElementById('submission-message');

            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();

                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
                const submitButton = contactForm.querySelector('.btn-submit');

                if (name === '' || email === '' || message === '') {
                    showMessage('Please fill out all required fields.', 'msg-error');
                    return;
                }

                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;

                setTimeout(() => {
                    const successMessage = `Thank you, ${name}! Your inquiry has been sent. We will be in touch shortly at ${email}.`;
                    showMessage(successMessage, 'msg-success');

                    contactForm.reset();
                    submitButton.textContent = 'Send Inquiry';
                    submitButton.disabled = false;
                }, 1500);
            });

            function showMessage(message, classType) {
                submissionMessage.textContent = message;
                submissionMessage.className = `submission-message ${classType}`;
                submissionMessage.style.display = 'block';

                setTimeout(() => {
                    submissionMessage.style.display = 'none';
                }, 5000);
            }

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

        });