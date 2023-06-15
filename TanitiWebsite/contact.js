function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Example usage
const emailInput = document.getElementById('email'); // Replace 'email' with the actual ID of your email input field

emailInput.addEventListener('input', function() {
  const email = this.value;
  const isValid = validateEmail(email);

  if (isValid) {
    // Valid email address
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    // Invalid email address
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
});
