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
document.body.appendChild(navbar);





// card container
var cardContainer = document.createElement('div');
cardContainer.style.border = '1px solid #ccc';
cardContainer.style.padding = '20px';
cardContainer.style.marginTop = '20px';

// card title
var cardTitle = document.createElement('h2');
cardTitle.textContent = 'LION'
cardTitle.style.marginBottom = '10px';
cardTitle.style.color = 'white';

// image element
var cardImage = document.createElement('img');
cardImage.src = 'https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
cardImage.alt = 'Card Image';
cardImage.style.width = '35%';
cardImage.style.marginBottom = '10px';

// initial information paragraph
var cardInfo = document.createElement('p');
cardInfo.textContent = 'The lion is the second largest member of the cat family after the tiger. Lions live in parts of Africa and India. Their loud roar is among the most terrifying sounds of the grasslands. The scientific name of the lion is Panthera leo.   ';

// button to change card content
var changeContentButton = document.createElement('button');
changeContentButton.textContent = 'next Content';
changeContentButton.style.marginTop = '10px';
changeContentButton.style.backgroundColor = '#4CAF50';
changeContentButton.style.color = 'white';
changeContentButton.style.padding = '10px';
changeContentButton.style.border = 'none';
changeContentButton.style.borderRadius = '5px';
changeContentButton.style.cursor = 'pointer';

// Store initial card content
var initialCardInfo = cardInfo.textContent;

// change the card content when the button is clicked
changeContentButton.addEventListener('click', function () {
    cardTitle.textContent = 'EAGLE'
    cardTitle.style.color = 'navy'
    cardTitle.style.marginBottom = '10px';
    cardImage.src = 'https://images.pexels.com/photos/2635393/pexels-photo-2635393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    cardImage.style.width = '40%';
    cardImage.style.marginBottom = '10px';
    cardInfo.textContent = `
    bald eagle, Species of sea eagle (Haliaeetus leucocephalus) that occurs inland along rivers and large lakes. Strikingly handsome, it is the only eagle native solely to North America, and it has been the U.S. national bird since 1782. The adult, about 40 in. `;
});

var restoreContentButton = document.createElement('button');
restoreContentButton.textContent = 'previous Content';
restoreContentButton.style.marginLeft = '20px';
restoreContentButton.style.marginTop = '10px';
restoreContentButton.style.backgroundColor = '#4CAF50';
restoreContentButton.style.color = 'white';
restoreContentButton.style.padding = '10px';
restoreContentButton.style.border = 'none';
restoreContentButton.style.borderRadius = '5px';
restoreContentButton.style.cursor = 'pointer';

restoreContentButton.addEventListener('click', function () {
    cardTitle.textContent = 'LION'
    cardTitle.style.color = 'white'
    cardImage.src = 'https://images.pexels.com/photos/2220337/pexels-photo-2220337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    cardImage.alt = 'Card Image';
    cardImage.style.width = '35%';
    cardImage.style.marginBottom = '10px';
    cardInfo.textContent = initialCardInfo;
});

// button to change the background color inside the card
var changeBackgroundColorButton = document.createElement('button');
changeBackgroundColorButton.textContent = 'Change Background';
changeBackgroundColorButton.style.marginLeft = '20px';
changeBackgroundColorButton.style.marginTop = '10px';
changeBackgroundColorButton.style.backgroundColor = '#4CAF50';
changeBackgroundColorButton.style.color = 'white';
changeBackgroundColorButton.style.padding = '10px';
changeBackgroundColorButton.style.border = 'none';
changeBackgroundColorButton.style.borderRadius = '5px';
changeBackgroundColorButton.style.cursor = 'pointer';

changeBackgroundColorButton.addEventListener('click', function () {
    cardContainer.style.backgroundColor = getRandomColor();
});

cardContainer.appendChild(cardTitle);
cardContainer.appendChild(cardImage);
cardContainer.appendChild(cardInfo);
cardContainer.appendChild(changeContentButton);
cardContainer.appendChild(restoreContentButton);
cardContainer.appendChild(changeBackgroundColorButton);

document.body.appendChild(cardContainer);

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
