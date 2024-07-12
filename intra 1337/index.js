document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if ((username === 'an' && password === '123') || (username === 'al' && password === '1234')) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';

        // Store the username in localStorage
        localStorage.setItem('username', username);

        // Redirect to userpage.html after a short delay
        setTimeout(function() {
            window.location.href = './userpage.html';
        }, 1000);
    } else {
        messageElement.textContent = 'Incorrect username or password.';
        messageElement.style.color = 'yellow';
    }
});
