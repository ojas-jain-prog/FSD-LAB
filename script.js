document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault(); // stop form from refreshing

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Check empty fields
    if (firstName === "" || lastName === "" || email === "" || password === "" || phone === "") {
        alert("All fields are required!");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter valid email address");
        return;
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    // Phone validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    alert("Form submitted successfully!");
});