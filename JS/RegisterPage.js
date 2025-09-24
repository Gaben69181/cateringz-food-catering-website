document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('submit');

    let isValid = true;

    let nameField = document.getElementById('name');
    let name = nameField.value.trim();
    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        isValid = false;
    } else {
        nameField.value = name.charAt(0).toUpperCase() + name.slice(1);
    }

    let email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert("Email must be valid");
        isValid = false;
    }

    let address = document.getElementById('address').value;
    if (address.length < 5) {
        alert("Address must be at least 5 characters");
        isValid = false;
    }

    let dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Date of Birth must be selected");
        isValid = false;
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Gender must be selected");
        isValid = false;
    }

    if (isValid) {
        alert("Register Success!");
        window.location.href = '../HTML/HomePage.html';
    }
});
