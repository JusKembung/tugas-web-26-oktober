document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('thank-you-message').style.display = 'block';
});
