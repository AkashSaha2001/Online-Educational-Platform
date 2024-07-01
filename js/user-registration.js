document.getElementById('mail').addEventListener('input', function () {
    var mail = this.value;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regex.test(mail);
    var emailFeedback = document.getElementById('emailFeedback');
    if (isValid) {
        emailFeedback.style.display = 'none';
    } else {
        emailFeedback.style.display = 'block';
    }
});

document.getElementById('password').addEventListener('input', function () {
    var password = this.value;

    var lengthFeedback = document.getElementById('passwordFeedback-length');
    var upperFeedback = document.getElementById('passwordFeedback-upper');
    var lowerFeedback = document.getElementById('passwordFeedback-lower');
    var numberFeedback = document.getElementById('passwordFeedback-number');
    var symbolFeedback = document.getElementById('passwordFeedback-symbol');

    // Regex patterns
    var upperCasePattern = /[A-Z]/;
    var lowerCasePattern = /[a-z]/;
    var numberPattern = /[0-9]/;
    var symbolPattern = /[\W_]/;  // Matches any non-word character (includes special characters)

    // Check length
    if (password.length < 8) {
        lengthFeedback.style.display = 'block';
    } else {
        lengthFeedback.style.display = 'none';
    }

    // Check for uppercase letter
    if (!upperCasePattern.test(password)) {
        upperFeedback.style.display = 'block';
    } else {
        upperFeedback.style.display = 'none';
    }

    // Check for lowercase letter
    if (!lowerCasePattern.test(password)) {
        lowerFeedback.style.display = 'block';
    } else {
        lowerFeedback.style.display = 'none';
    }

    // Check for number
    if (!numberPattern.test(password)) {
        numberFeedback.style.display = 'block';
    } else {
        numberFeedback.style.display = 'none';
    }

    // Check for special character
    if (!symbolPattern.test(password)) {
        symbolFeedback.style.display = 'block';
    } else {
        symbolFeedback.style.display = 'none';
    }
});

document.getElementById('mobile').addEventListener('input', function () {
    var phoneNumber = this.value;
    const pattern = /^\d{10}$/;
    const isValidnumber = pattern.test(phoneNumber);
    var mobileFeedback = document.getElementById('mobileFeedback');
    if (isValidnumber) {
        mobileFeedback.style.display = 'none';
    } else {
        mobileFeedback.style.display = 'block';
    }
});