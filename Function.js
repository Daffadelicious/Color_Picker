/*// document.write("Running");
// Variables
var modal = document.getElementById("modal");
var changeBtn = document.getElementById("change");
var preview = document.getElementById("preview");


// Functions
function Preview() {
    color = document.querySelector('input[name="colors"]:checked').value;
    console.log("The color is " + color);
    preview.style.background = color;
}

function changeColor() {
    console.log("The color is " + color);
    document.body.style.background = color;
}

function Close() {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    preview.style.background = "#1a1a1a";
    document.querySelector('input[name="colors"]:checked').checked = false;
}

function ChangeButtonClick() {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        preview.style.background = "#1a1a1a";
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
};*/

//Variables//
//This grabs the id of the first modal and sets it equal to modal
var modal = document.getElementById("modal");
//This grabs the button with the id "change"
//This allows us to call a function with a click later
var changeBtn = document.getElementById("change");
//This grabs the preview
var preview = document.getElementById("preview");


//Functions//

//Function to set Preview Boxes//

//This sets the Preview Box color in the modal to the currently selected color
function Preview() {
    //This gets the currently selected color's value and sets it equal to color
    color = document.querySelector('input[name="colors"]:checked').value;
    //Log what color
    console.log("The color is " + color);
    //Change preview color
    preview.style.background = color;
}

//Function to change Color//

//Change the Color
function changeColor() {
    //Log what the color was changed to
    console.log("The color is: " + color);
    //Change the background color
    document.body.style.background = color;
}

//Function to open modal//


//Function to close modal//

//When the user clicks on the close button in modal it closes it
function Close() {
    //Close modal
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    //Reset Preview
    preview.style.background = "#1a1a1a";
    //Unselect any currently selected color
    document.querySelector('input[name="colors"]:checked').checked = false;
}

//Open color changing modal
function ChangeButtonClick() {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

//Close modal on window click
window.onclick = function(event) {
    if (event.target === modal) {
        //Close modal
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        //Reset Preview
        preview.style.background = "#1a1a1a";
        //Unselect any currently selected color
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
};