// auth.js

// Check if the user is logged in
function checkAuthentication() {
    if (!localStorage.getItem('loggedIn')) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    }
}

// Log out function
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}

// Sample login function (to be placed on the login page)
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check (replace with actual backend authentication)
    if (username === 'student' && password === 'password') {
        localStorage.setItem('loggedIn', 'true'); // Store login status in local storage
        window.location.href = 'index.html'; // Redirect to homepage
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid credentials. Please try again.';
    }
}
