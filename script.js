document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'admin'; // replace with your actual username
    const correctPassword = 'admin'; // replace with your actual password

    if (username === correctUsername && password === correctPassword) {
        openGoogleSheet();
    } else {
        alert('Incorrect username or password');
    }
});

function openGoogleSheet() {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/1KZkqRPOcsWbaff0jphZjt_9Yb0Yhw95qJ8GItiqNXEg/edit?usp=sharing'; // replace with your actual Google Sheet URL
    window.location.href = sheetUrl;
}
