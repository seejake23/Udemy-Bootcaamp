var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

const img1 = document.getElementById("1");
const img2 = document.getElementById("2");

function player1RandomDie() {
    if (randomNumber1 === 1) {
        img1.setAttribute('src', 'images/dice1.png'); 
    }
    else if (randomNumber1 === 2) {
        img1.setAttribute('src', 'images/dice2.png');
    }
    else if (randomNumber1 === 3) {
        img1.setAttribute('src', 'images/dice3.png');
    }
    else if (randomNumber1 === 4) {
        img1.setAttribute('src', 'images/dice4.png');
    }
    else if (randomNumber1 === 5) {
        img1.setAttribute('src', 'images/dice5.png');
    } else {
        img1.setAttribute('src', 'images/dice6.png');
    }
}

function player2RandomDie() {
    if (randomNumber2 === 1) {
        img2.setAttribute('src', 'images/dice1.png'); 
    }
    else if (randomNumber2 === 2) {
        img2.setAttribute('src', 'images/dice2.png');
    }
    else if (randomNumber2 === 3) {
        img2.setAttribute('src', 'images/dice3.png');
    }
    else if (randomNumber2 === 4) {
        img2.setAttribute('src', 'images/dice4.png');
    }
    else if (randomNumber2 === 5) {
        img2.setAttribute('src', 'images/dice5.png');
    } else {
        img2.setAttribute('src', 'images/dice6.png');
    }
}

function determineWinner(randomNumber1, randomNumber2) {
    if (randomNumber1 === randomNumber2) {
        document.querySelector('h1').innerHTML = "Draw!";
    } 
    else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').style.color="#790d5d";
        document.querySelector('h1').innerHTML = "Player 2 Wins!🚩";
    } 
    else {
        document.querySelector('h1').style.color="#117050";
        document.querySelector('h1').innerHTML = "🚩Player 1 Wins!";
    }

} 


player1RandomDie();
player2RandomDie();
determineWinner(randomNumber1, randomNumber2);