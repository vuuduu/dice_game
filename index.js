// generate random number from 1 to 6
var randNumOne = Math.floor(Math.random() * 6) + 1;
var randNumTwo = Math.floor(Math.random() * 6) + 1;

// Grab the two dice image
var diceOne = document.querySelectorAll("img")[0];
var diceTwo = document.querySelectorAll("img")[1];

// get the image and set the img src
var diceOneImg = "dice" + randNumOne + ".png";
var diceTwoImg = "dice" + randNumTwo + ".png";

diceOne.setAttribute("src", "images/" + diceOneImg);
diceTwo.setAttribute("src", "images/" + diceTwoImg);

if (randNumOne > randNumTwo) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if (randNumOne < randNumTwo) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else {
    document.querySelector("h1").innerHTML = "DRAW!";
}

function reloadPage() {
    location.reload();
}

