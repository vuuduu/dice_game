// generate random number from 1 to 6
const randImgDiceOne = Math.floor(Math.random() * 6 + 1)
const randImgDiceTwo = Math.floor(Math.random() * 6 + 1)

// Grab the html element
header = document.querySelector("h1");
const [diceOne, diceTwo] = document.querySelectorAll(".dice");

// Setting image for Dice one
let diceImg = diceOne.querySelector("img")
switch(randImgDiceOne) {
    case 1:
        diceImg.setAttribute("src", "./images/dice1.png")
        break;
    case 2:
        diceImg.setAttribute("src", "./images/dice2.png")
        break;
    case 3:
        diceImg.setAttribute("src", "./images/dice3.png")
        break;
    case 4:
        diceImg.setAttribute("src", "./images/dice4.png")
        break;
    case 5:
        diceImg.setAttribute("src", "./images/dice5.png")
        break;
    case 6:
        diceImg.setAttribute("src", "./images/dice6.png")
        break;
}

// setting image for dice two
diceImg = diceTwo.querySelector("img")
switch(randImgDiceTwo) {
    case 1:
        diceImg.setAttribute("src", "./images/dice1.png")
        break;
    case 2:
        diceImg.setAttribute("src", "./images/dice2.png")
        break;
    case 3:
        diceImg.setAttribute("src", "./images/dice3.png")
        break;
    case 4:
        diceImg.setAttribute("src", "./images/dice4.png")
        break;
    case 5:
        diceImg.setAttribute("src", "./images/dice5.png")
        break;
    case 6:
        diceImg.setAttribute("src", "./images/dice6.png")
        break;
}

if (randImgDiceOne > randImgDiceTwo) {
    header.textContent = "🚩 Player 1 WINS"
}else if (randImgDiceOne < randImgDiceTwo) {
    header.textContent = " Player 2 WINS 🚩"
}else {
    header.textContent = "DRAW"
}