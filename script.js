// Show Signup Form
function showSignup() {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("signup-box").classList.remove("hidden");
}

// Show Login Form
function showLogin() {
    document.getElementById("signup-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
}

// Email validation helper
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validate Login
function validateLoginForm() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Email validation
    if (!isValidEmail(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    alert("Login successful!");
    return true;
}

// Validate Signup
function validateSignupForm() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Name validation (ensure it's not empty)
    if (name.trim() === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Email validation
    if (!isValidEmail(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    alert("Signup successful!");
    return true;
}
