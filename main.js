"use strict";

var input = document.getElementById('input'), //input/output button
number = document.querySelectorAll('.numbers div'), //number buttons
operator = document.querySelectorAll(''.operators div'), //operator buttons
result = document.getElementById('result'), //equal button
clear = document.getElementById('clear'), // clear button
resultDisplayed = false; //flag to keep an eye on what output is displayed

//adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {

        //storing current input string and its last character in variables - used later
var currentString = input.innerHTML;
var lastChar = currentString[currentString.length - 1];

// if result is not displayed, just keep adding
if (resultDisplayed === false) {
    input.innerHTML += e.target.innerHTML;
} else if (resultDisplayed === true && lastChar === "+" ) || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
    // if result is currently displayed and user pressed an operator
    // we need to keep adding on the string for next operationS
    resultDisplayed = false;
    input.innerHTML += e.target.innerHTML;
    } else {
        //if result is currently displayed and user pressed a number
        //we need clear the input string and add the new input to start the new operation
        resultDisplayed = false;
        input.innerHTML = "";
        input.innerHTML += e.target.innerHTML;
    }
});

}