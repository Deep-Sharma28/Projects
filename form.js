
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    let valid = true;

   
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'Email is invalid';
        valid = false;
    }

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        valid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        valid = false;
    }

    if (valid) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
    }
});
