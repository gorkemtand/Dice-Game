var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".player1 img").setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".player2 img").setAttribute("src", randomDiceImage2);


if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
