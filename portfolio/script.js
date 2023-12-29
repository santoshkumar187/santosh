document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle project details visibility
    window.toggleProjectDetails = function (project) {
        var details = project.querySelector('.project-details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    };

    // Function to validate the contact form
    window.validateForm = function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        if (name.trim() === '') {
            alert('Please enter your name.');
            return false;
        }

        if (email.trim() === '') {
            alert('Please enter your email.');
            return false;
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        alert('Form submitted successfully!');
        return true;
    };

    // Function to check if the email is valid
    function isValidEmail(email) {
        // Basic email validation using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});