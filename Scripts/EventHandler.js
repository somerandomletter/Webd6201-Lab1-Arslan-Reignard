/**
 * Name: Reignard Uy & Arslan Mahmood
 * StudentID: 100757893 & 100792834
 * Date: 02/06/23
 * About: The purpose os the creations of the websites that we have made and linked all together is for the purpose of a Project being taken
 * At durham College within the Program Computer Programing. Within the various Pages created we have our home page, About us page, our contact page,
 * products page, and lastly our servies.
 */

var userDisplay = document.getElementById("userDisplay");

// Validating Contact forms
function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["email"].value;
    let z = document.forms["myForm"]["message"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Email must be given");
        return false;
    }
    console.log(`Username: ${x} Email: ${y} Message: ${z}`)
    userDisplay.textContent = `Username: ${x} Email: ${y} Message: ${z}`;
    userDisplay.style.color = 'white';
    userDisplay.style.fontSize = '20px';
    userDisplay.style.fontFamily = 'Arial';
    return false;
}

// JavaText
function javaText(){
    var txt = document.createElement("txt");
    txt.id = "jstxt";
    txt.innerHTML = "Using JavaScript To Write This Text."
    document.body.appendChild(txt);
}

// Change the Product link to Projects
function changeLink() {
    var change = document.getElementById("change");
    change.innerHTML = '<i class="fa-solid fa-sheet-plastic" style="font-size:20px;"></i>Projects';
}

// Welcome Text
function welcomeHeader(){
    var welcomeMsg = document.createElement("p");
    welcomeMsg.id = "welcome";
    welcomeMsg.innerHTML = "Welcome To Our Lab 1 Website";
    document.body.appendChild(welcomeMsg);
}
// Products text 
function updateProjects() {
    var CalcPic = document.getElementById("CalcPic");
    CalcPic.innerHTML = "Coded a small project that involved creating a workable Calculator";

    var randomNumber = document.getElementById("randomNumber");
    randomNumber.innerHTML = "Created a basic random number generator, that allowed user to ask how much numbers they want generated";

    var smallGame = document.getElementById("smallGame");
    smallGame.innerHTML = "Basic simple code that allows user to choose between rock, paper, and scissor to face off againts the AI";
}

// Services text 
function updateWebDev() {
    var webDev = document.getElementById("webDev");
    webDev.innerHTML = "Confident in our skills of web development despite being fairly new in the field.";

    var webDesign = document.getElementById("webDesign");
    webDesign.innerHTML = "We strive for efficiency and the best quality when designing web pages.";

    var ctmCode = document.getElementById("ctmCode");
    ctmCode.innerHTML = "Continue to work on small projects to better our coding skills.";
}

// About us
function aboutUs() {
    var Rey = document.getElementById("Rey");
    Rey.innerHTML = "Hi I'm Reignard, or Rey. I'm currently 21 years old, I enjoy web developement, and on my free time I read, and play basketball.";
    
    var Arslan = document.getElementById("Arslan");
    Arslan.innerHTML = "Hello My name Arslan Mahmood, im currently enrolled at Durham College taking a Program Called Computer Proggraming. I like to listen to music, Mainly my own voice.  I play games like league of Legends, im basicaly number 1. My Friends call me king of the jungle but u can just call me King";
}

// Add nav link
function addLink() {
    let navbar = document.querySelector(".navbar-nav");
    let aboutUs = document.querySelectorAll(".navbar-nav .nav-item")[3];
    let humanResources = document.createElement("li");
    humanResources.classList.add("nav-item");
    let link = document.createElement("a");
    link.classList.add("nav-link");
    link.setAttribute("aria-current", "page");
    link.setAttribute("href", "./humanresources.html");
    link.innerHTML = '<i class="fa-solid fa-address-card"></i>Human Resources';
    humanResources.appendChild(link);
    navbar.insertBefore(humanResources, aboutUs.nextSibling);
}

// Copyright
function Copyright(){
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
}

// Redirection 
document.getElementById("submitbutton").addEventListener("click", function () {
    console.log("User Information:", document.getElementById("myForm").elements);
    validateForm();
    setTimeout(function () {
        window.location.href = "./index.html";
    }, 3000);
});
