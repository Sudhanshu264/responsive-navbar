

// Styling body
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

// Modal button with icon only
var modalButton = document.createElement('button');
modalButton.style.marginRight = '20px';

// Creating a Google Material Icon
var icon = document.createElement('i');
icon.classList.add('material-icons');
icon.textContent = 'add_circle';

modalButton.appendChild(icon);

modalButton.addEventListener('click', openModal);

navbar.appendChild(modalButton);







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
document.body.appendChild(navbar);


// Card elements
var card = document.createElement('div');
card.style.backgroundColor = 'white';
card.style.padding = '20px';
card.style.margin = '20px';
card.style.borderRadius = '10px';
card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

var cardInfo = document.createElement('p');
cardInfo.textContent = 'Click the + to add text.';
cardInfo.style.margin = '0';

card.appendChild(cardInfo);
document.body.appendChild(card);

// Modal elements
var modal = document.createElement('div');
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
modal.style.alignItems = 'center';
modal.style.justifyContent = 'center';

document.body.appendChild(modal);

var modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fff';
modalContent.style.padding = '20px';
modalContent.style.textAlign = 'center';

var input = document.createElement('input');
input.placeholder = 'Enter text';

modal.appendChild(modalContent);

document.body.appendChild(modal);

// Apply Changes button in modal
var applyChangesButton = document.createElement('button');
applyChangesButton.textContent = 'Apply Changes';
applyChangesButton.addEventListener('click', applyChanges);

modalContent.appendChild(input);
modalContent.appendChild(applyChangesButton);
modal.appendChild(modalContent);

// Font Size input field
var fontSizeInput = document.createElement('input');
fontSizeInput.placeholder = 'Enter Font Size (e.g., 16px)';
fontSizeInput.style.marginTop = '10px';

// Function to open the modal
function openModal() {
    modal.style.display = 'flex';
}

// Function to apply changes
function applyChanges() {
    var inputValue = input.value;

    if (inputValue) {
        cardInfo.textContent = inputValue;
    }

    modal.style.display = 'none';
}
