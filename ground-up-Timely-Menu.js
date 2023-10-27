let dateTime = new Date();
let hour = dateTime.getHours();
// console.log(hour);
let linkText;
let linkHref;


if(hour <11) {
    linkText = 'Breakfast';
    linkHref = 'breakfast.html';
}
 else if(hour < (12+4)) {
    linkText = 'Lunch';
    linkHref = 'lunch.html';
}
else{
    linkText = 'Dinner';
    linkHref = 'dinner.html';
};


//if-else if-else logic to handle breakfast, lunch and dinner
//TARGET THE MEAL-LINK AND ASSIGN THE LINKTEST LINKHREF
// const mealLinkBtn = document.getElementById('meal-link');

//dynamically generate an a-tag , assign it its properties and output it to the DOM as a child of the current div
let menuLink = document.createElement('a');
menuLink.href= linkHref;
// menuLink.textContent = linkText;
 document.getElementById('current-menu').appendChild(menuLink);currentMenuDiv.appendChild(menuLink);
 menuLink.className = "button";


//challenge: put a "Timely Greeting" out in the nav if hr is less than 12, say "Good Morning! 10:34 is Coffee Time!" else if hr is less than 17, say "Good Afternoon! 16:34 is Coffee Time" else hr is at least 17, so say "Good Evening ! 18:34 is COffee Time use getMunutes(" to get the current minute you need some tag to hold this stuff such as a span perhaps or a li-tag so you can either type the html right in the nav or you can be all fancy an ddynamically make the tag

const greetingSpan = document.getElementById('greeting');
let greeting="";
hour = 7;
let min = dateTime.getMinutes;

if(hour < 12){
    greeting = "Good Morning";

}else if(hour <17){
    greeting = "Good Afternoon";
}else{
    greeting = "Good Evening";
}

greetingSpan.textContent = greeting+hour+":"+min+"is Coffee Time!";

