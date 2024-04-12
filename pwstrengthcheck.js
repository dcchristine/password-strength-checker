function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    var strengthText = document.getElementById('strengthText');
    var container = document.querySelector('container');

    var strength = 0;

    // Length check
    if (password.length >= 8) {
        strength += 1;
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Number check
    if (/[0-9]/.test(password)) {
        strength += 1;
    }

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) {
        strength += 1;
    }
    // Display strength text based on strength score
    if (strength == 0) {
        strengthText.textContent = "Please enter a password";
    } else if (strength <= 2) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "red";
    } else if (strength <= 4) {
        strengthText.textContent = "Medium";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "green";
    }
}

