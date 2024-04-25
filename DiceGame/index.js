// ///////////////////////////////////////////////////////////////////////////
var randomNumber1 = Math.floor((Math.random() * 6)+1);

var diceimg1 = "./images/dice"+randomNumber1+".png"

var dice1 = document.querySelector(".img1");

dice1.setAttribute("src", diceimg1);
// ////////////////////////////////////////////////////////////////////////////
var randomNumber2 = Math.floor((Math.random() * 6)+1);

var diceimg2 = "./images/dice"+randomNumber2+".png"

var dice2 = document.querySelector(".img2");

dice2.setAttribute("src", diceimg2);
// //////////////////////////////////////////////////////////////////////////
function winner (num1, num2){
    if (num1 < num2) {
        return document.querySelector(".win").textContent="Player 2 Won"
    } else if (num1 > num2) {
        return document.querySelector(".win").textContent="Player 1 Won"
    } else {
        return document.querySelector(".win").textContent="Its a Draw"
    }
}
winner(randomNumber1, randomNumber2);

//// to refresh page , play again button 
document.querySelector("button").addEventListener("click",function() {
    location.reload();
})