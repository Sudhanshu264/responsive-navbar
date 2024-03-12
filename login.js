
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



function fun1(event) {
    var item = event.target
    item.style.backgroundColor = "lightgreen"
}
function fun2(event) {
    var item = event.target
    item.style.backgroundColor = "lightgray"
}
function fun3(event) {
    var item = event.target
    item.style.backgroundColor = "white"
    var heading = document.getElementById(`h${item.id}`)
    heading.innerHTML = `<span class='heading-text'>${item.id}</span> : ${item.value}`
}
function postData() {
    alert(`
        Name         :   ${document.getElementById("name").value}
        Email        :   ${document.getElementById("email").value}
        Phone        :   ${document.getElementById("phone").value}
        Designation  :   ${document.getElementById("designation").value}
        Salary       :   ${document.getElementById("salary").value}
        City         :   ${document.getElementById("city").value}
        State        :   ${document.getElementById("state").value}
    `)
    document.getElementById("name").value = ""
}
