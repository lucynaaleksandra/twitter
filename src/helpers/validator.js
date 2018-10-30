const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");


// Can only contain letters a-z in lowercase
function validateUsername(username) {
  return /^[a-z]+$/.test(username)
}
function validatePassword(password) {
  return /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)
}
// The telephone number must be in the format of (555) 555-5555
function validateTelephone(telephone) {
  return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(telephone)
}
// Must be a valid email address
function validateEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email)
}

function showOrHideTip(show, element) {
  // show element when show is true, hide when false - show & hide tooltips
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(validateUsername));
passwordInput.addEventListener("input", createListener(validatePassword));
telephoneInput.addEventListener("input", createListener(validateTelephone));
emailInput.addEventListener("input", createListener(validateEmail));
