//generate the random number
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource1 ="./images/dice" +randomNumber1+ ".png";
var randomImageSource2 ="./images/dice" +randomNumber2+ ".png";

var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelector(".img2");


dice1.setAttribute("src", randomImageSource1);
dice2.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}