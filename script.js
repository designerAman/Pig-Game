var dice = 0;
var activePlayer = 1;
var score = 0;
var realScore1 = 0;
var realScore2 = 0;

var first = prompt('enter first player name');
var second = prompt('enter second player name');

document.querySelector('#player1Name').textContent = first;
document.querySelector('#player2Name').textContent = second;

document.querySelector('#player1Score').innerHTML = 00;
document.querySelector('#player2Score').textContent = 00;
document.querySelector('#player1CurrentScore').textContent = 00;
document.querySelector('#player2CurrentScore').textContent = 00;
document.querySelector("#dice").style.display = "none";

document.querySelector("#rollDice").addEventListener('click', function(){

    document.querySelector("#dice").style.display = "initial";    

    dice = Math.floor(Math.random()*6 + 1);
    document.querySelector('#diceImage').src = "dice"+dice+".png";
    if(dice !== 1){
        score += dice;
        document.querySelector("#player"+activePlayer+"CurrentScore").textContent = score;
    }else{
        score = 0;
        document.querySelector("#player"+activePlayer+"CurrentScore").textContent = score;
        document.querySelector("#player"+activePlayer).classList.toggle('active');
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        document.querySelector("#player"+activePlayer).classList.toggle('active');
    }
});

document.querySelector("#hold").addEventListener('click', function(){

    document.querySelector('#player'+activePlayer+'CurrentScore').textContent = 0;

    if(activePlayer === 1){
        realScore1 +=score;
        document.querySelector('#player'+activePlayer+'Score').textContent = realScore1;
        document.querySelector("#player"+activePlayer).classList.toggle('active');
        score = 0;
        activePlayer = 2;
        document.querySelector("#player"+activePlayer).classList.toggle('active');
    }else{
        realScore2 += score;
        document.querySelector('#player'+activePlayer+'Score').textContent = realScore2;
        score = 0;
        document.querySelector("#player"+activePlayer).classList.toggle('active');
        activePlayer = 1;
        document.querySelector("#player"+activePlayer).classList.toggle('active');
    }

    if(document.querySelector("#player1Score").textContent >= 100){
        document.querySelector("#player1Score").textContent = "WINNER ";
        document.querySelector("#hold").style.display = "none";
        document.querySelector('#rollDice').style.display = "none";
    }else if(document.querySelector("#player2Score").textContent >= 100){
        document.querySelector("#player2Score").textContent = "WINNER ";
        document.querySelector("#hold").style.display = "none";
        document.querySelector('#rollDice').style.display = "none";
    }
});

document.querySelector('#newGame').addEventListener('click', function(){
    var dice = 0;
    var activePlayer = 1;
    var score = 0;
    var realScore1 = 0;
    var realScore2 = 0;
    var first = prompt('enter first player name');
    var second = prompt('enter second player name');
    document.querySelector('#player1Score').textContent = 00;
    document.querySelector('#player2Score').textContent = 00;
    document.querySelector('#player1CurrentScore').textContent = 00;
    document.querySelector('#player2CurrentScore').textContent = 00;
    document.querySelector("#dice").style.display = "none";
    document.querySelector("#hold").style.display = "initial";
    document.querySelector('#rollDice').style.display = "initial";
    document.querySelector("#player1Name").textContent = first;
    document.querySelector("#player2Name").textContent = second;
});

