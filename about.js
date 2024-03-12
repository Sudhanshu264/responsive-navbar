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
        

window.onload = function () {
    // Creating the center div
    var center = document.createElement("div");
    center.classList.add("center");
  
    // Creating the first div
    var first = document.createElement("div");
    first.classList.add("first");
  
    // Creating buttons and adding click event listeners
    var createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.onclick = create;
  
    var deleteFirstButton = document.createElement("button");
    deleteFirstButton.textContent = "Delete First";
    deleteFirstButton.onclick = deleteFirst;
  
    var deleteAllButton = document.createElement("button");
    deleteAllButton.textContent = "Delete All";
    deleteAllButton.onclick = deleteAll;

    
  
    // Appending buttons to the first div
    first.appendChild(createButton);
    first.appendChild(deleteFirstButton);
    first.appendChild(deleteAllButton);
  
    // Creating the second div
    var second = document.createElement("div");
    second.classList.add("second");
  
    // Appending the first and second divs to the center div
    center.appendChild(first);
    center.appendChild(second);
  
    // Appending the center div to the body
    document.body.appendChild(center);
  
    var count = 1;
  
    function create() {
      var p = document.createElement("p");
      p.id = `p${count}`;
      p.innerHTML = `This is Paragraph p${count}`;
      count++;
  
      second.appendChild(p);
    }
  
 
  
    function deleteFirst() {
      if (second.childNodes.length > 0) {
        let p = second.childNodes[0];
        second.removeChild(p);
      }
    }
  
    function deleteAll() {
      count = 1;
      second.innerHTML = '';
    }
  };
  