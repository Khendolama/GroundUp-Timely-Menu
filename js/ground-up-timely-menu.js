//get the menu div
const currentMenuDiv = document.getElementById('current-menu');
//make am a-tag to go in the div
const menuLink = document.createElement('a');
//assign href, and link text and class to a-tag
// menuLink.href = "breakfast.html";
// menuLink.textContent = "Breakfast Menu";
menuLink.className = "button";
//output the a-tag to the div:
currentMenuDiv.appendChild(menuLink);

//instantiate the Date class:
const dt = new Date();
let hr = dt.getHours();
let min = dt.getMinutes();

//decalre vars to hold the href and text, the values of which will be set dynamically in an if-else
let menuHref = "";
let menuText = "";
//set the href and text vsed on current hour:

hr = 10;
// set the href and text based on current horu:
// at 10:30 switch to lunch menu
if(hr < 11) {
    menuHref = "breakfast.html";
    menuText = "Breakfast Menu";
}else if(hr <15){
    menuHref = "lunch.html";
    menuText = "Lunch Menu";
}else {
    menuHref = "dinner.html";
    menuText = "Dinner Menu";
}

if(hr < 11) {
    if(hr == 10){
        if(min < 30){
            menuHref = "breakfast.html";
            menuText = "Breakfast Menu";
        }else {
            menuHref = "lunch.html";
            menuText = "Lunch Menu";
        }
    } else {
        menuHref = "breakfast.html";
        menuText = "Breakfast Menu";
    }
} else if (hr < 15){
    menuHref = "lunch.html";
    menuText = "Lunch Menu";
}else {
    menuHref = "dinner.html";
    menuText = " Dinner Menu";
}
// assign the variables to href and text:
menuLink.href = menuHref;
menuLink.textContent = menuText;