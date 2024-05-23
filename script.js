

const emailInput = document.getElementById('userEmail');
const emailError = document.getElementById('emailError');

emailInput.addEventListener('blur', function() {
  const email = emailInput.value;
  let errorMessage = "";

  if (email.length < 5) {
    errorMessage = "Email address is too short.";
  } else {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage = "Invalid email format.";
    }
  }

  emailError.textContent = errorMessage; 
});
