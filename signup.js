document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/11299606/pexels-photo-11299606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.minHeight = '100vh';
document.body.style.margin = '0';
document.body.style.backdropFilter = 'blur(2px)';

// Creating navbar
var navbar = document.createElement('div');
navbar.style.backgroundColor = 'white';
navbar.style.padding = '10px';
navbar.style.color = 'white';
navbar.style.textAlign = 'center';

// Hover function added
navbar.addEventListener('mouseover', function () {
navbar.style.backgroundColor = '#ddd';
navbar.style.cursor = 'pointer';
});
navbar.addEventListener('mouseout', function () {
navbar.style.backgroundColor = 'white';
navbar.style.cursor = 'default';
});
document.body.appendChild(navbar);

// creating home
var homeLink = document.createElement('a');
homeLink.href = 'home.html';
homeLink.textContent = 'Home';
homeLink.style.marginRight = '20px';
homeLink.style.textDecoration = 'none'

//creating about
var aboutLink = document.createElement('a');
aboutLink.href = 'about.html';
aboutLink.textContent = 'About';
aboutLink.style.marginRight = '20px';
aboutLink.style.textDecoration = 'none'

//creating contact
var contactLink = document.createElement('a');
contactLink.href = 'contact.html';
contactLink.textContent = 'Contact';
contactLink.style.marginRight = '20px';
contactLink.style.textDecoration = 'none'

//creating login
var loginLink = document.createElement('a');
loginLink.href = 'login.html';
loginLink.textContent = 'Login';
loginLink.style.marginRight = '20px';
loginLink.style.textDecoration = 'none'

//creating signup
var signupLink = document.createElement('a');
signupLink.href = 'signup.html';
signupLink.textContent = 'Signup';
signupLink.style.marginRight = '20px';
signupLink.style.textDecoration = 'none'

//add link in navbar 
navbar.appendChild(homeLink);
navbar.appendChild(aboutLink);
navbar.appendChild(contactLink);
navbar.appendChild(loginLink);
navbar.appendChild(signupLink);

//add navbar in body


    function validateForm() {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var usernameError = document.getElementById("usernameError");
      var emailError = document.getElementById("emailError");
      var passwordError = document.getElementById("passwordError");
      var isValid = true;

      // Reset error messages and styles
      usernameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      removeErrorStyles();

      // Validate username
      if (username === "") {
        usernameError.textContent = "Username is required";
        applyErrorStyle(document.getElementById("username"));
        isValid = false;
      }

      // Validate email
      if (email === "") {
        emailError.textContent = "Email is required";
        applyErrorStyle(document.getElementById("email"));
        isValid = false;
      } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        applyErrorStyle(document.getElementById("email"));
        isValid = false;
      }

      // Validate password
      if (password === "") {
        passwordError.textContent = "Password is required";
        applyErrorStyle(document.getElementById("password"));
        isValid = false;
      } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        applyErrorStyle(document.getElementById("password"));
        isValid = false;
      }

      return isValid;
    }

    function isValidEmail(email) {
      // Basic email validation, you may want to use a more comprehensive approach
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function applyErrorStyle(element) {
      element.style.border = "1px solid red";
    }

    function removeErrorStyles() {
      var elements = document.getElementsByTagName("input");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.border = "1px solid #ccc";
      }
    }