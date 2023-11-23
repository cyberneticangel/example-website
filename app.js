'use strict';

/* Adding an event handler for the button
   the document.querySelector uses CSS Selectors  */
const switcher = document.querySelector('.btn');

/* Adding an event handler for the event "click" */
/* We use the toggle method to change the class attribute of the <body> element */ 
switcher.addEventListener('click', function() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    
const className = document.body.className;

if(className == "light-theme") {
    this.textContent = "Dark";
}
    else {
        this.textContent = "Light";
    }
    console.log("current class name: " + className);
});