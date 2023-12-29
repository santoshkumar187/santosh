<script>
document.getElementById('registrationButton').addEventListener('click', function() {
 var firstName = document.getElementById('firstName').value;
 var lastName = document.getElementById('lastName').value;
 var email = document.getElementById('email').value;
 var password = document.getElementById('password').value;
 var confirmPassword = document.getElementById('confirmPassword').value;

 if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill out all the fields.');
    return;
 }

 if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
 }

 // Add your code to submit the form data here
});
</script>