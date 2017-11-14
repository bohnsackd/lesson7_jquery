/*
    Program Name: Recipe Display Application
    
    Author: David Bohnsack
    
    Date: 11/13/17
    
    Filename: script.js
*/
/*global $ */
function display(event) {
    
    $(event.currentTarget) .next() .fadeIn("slow");
    
}//end of display
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);