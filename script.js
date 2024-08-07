document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'admin'; // replace with your actual username
    const correctPassword = 'admin'; // replace with your actual password

    if (username === correctUsername && password === correctPassword) {
        openGoogleSheet();
    } else {
        showAlert('Login Failed', 'Incorrect username or password');
    }
});

function openGoogleSheet() {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/1P0aDI47JX8sMJ4bvW-wMUaMkbS7qpgP3HMaFyF6RNR4/edit?usp=sharing'; // replace with your actual Google Sheet URL
    
    // Remove the login form
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';

    // Redirect to the Google Sheet URL after a short delay to ensure the form is hidden
    setTimeout(function() {
        window.location.href = sheetUrl;
    }, 1000); // 1-second delay
}

function showAlert(title, message) {
    const modal = document.getElementById('customAlert');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    const closeButton = document.getElementById('closeButton');

    alertTitle.textContent = title;
    alertMessage.textContent = message;
    modal.style.display = 'flex';

    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
