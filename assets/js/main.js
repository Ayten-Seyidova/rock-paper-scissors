document.querySelector(".play-btn").addEventListener("click", function () {
    document.querySelector('.jumbotron').style.display = "none";
    document.querySelector("main").style.display = "block";
});

var keys = ['r', 'p', 's'];
var player1Score = 0;
var player2Score = 0;
var player1 = document.querySelector('#playerImg1');
var player2 = document.querySelector('#playerImg2');
var player1ScorePanel = document.querySelector('#playerScore1');
var player2ScorePanel = document.querySelector('#playerScore2');
var winInfoPanel1 = document.querySelector('#winGame1');
var winInfoPanel2 = document.querySelector('#winGame2');
var rpsName1 = document.querySelector('#rpsName1');
var rpsName2 = document.querySelector('#rpsName2');
var winInfo = document.querySelectorAll('.win');
var roundScore1 = 0;
var roundScore2 = 0;

var keyNames = {
    r: "Rock",
    p: "Paper",
    s: "Scissors",
}

function randomCompAttack(arr) {
    var randomNum = Math.floor(Math.random() * keys.length);
    return arr[randomNum];
}

function startGame(e) {

    var userAttack = e.key.toLowerCase();
    var compAttack = randomCompAttack(keys);


    if (keys.indexOf(userAttack) === -1) {
        alert('Please choose "r p s" keypress');
        return
    } else {

        winInfoPanel1.style.visibility = "visible";
        winInfoPanel2.style.visibility = "visible";

        player1.src = `./assets/img/${userAttack}.png`;
        player2.src = `./assets/img/${compAttack}.png`;

        rpsName1.innerHTML = keyNames[userAttack];
        rpsName2.innerHTML = keyNames[compAttack];
    }

    if (userAttack === compAttack) {

        winInfoPanel1.innerHTML = 'DRAW';
        winInfoPanel2.innerHTML = 'DRAW';

    } else if ((userAttack === 'r' && compAttack === "s") || (userAttack === 's' && compAttack === "p") || (userAttack === 'p' && compAttack === "r")) {

        player1Score++
        player1ScorePanel.innerHTML = `Score: ${player1Score}`;

        winInfoPanel1.innerHTML = 'WIN';
        winInfoPanel2.innerHTML = 'LOSE';

    } else {

        player2Score++
        player2ScorePanel.innerHTML = `Score: ${player2Score}`;

        winInfoPanel1.innerHTML = 'LOSE';
        winInfoPanel2.innerHTML = 'WIN';

    }

    for (let i = 0; i < winInfo.length; i++) {
        if (winInfo[i].textContent === "WIN") {
            winInfo[i].style.color = "green";
        } else if (winInfo[i].textContent === "LOSE") {
            winInfo[i].style.color = "red";
        } else {
            winInfo[i].style.color = "black";
        }
    }

    if (player1Score === 5) {
        setTimeout(() => {
            alert("Player 1 won the game");
            player1Score = 0;
            player2Score = 0;
            player1ScorePanel.innerHTML = 'Score: 0';
            player2ScorePanel.innerHTML = 'Score: 0';
            roundScore1++
            winInfoPanel1.innerHTML = `General score: ${roundScore1}`;
            winInfoPanel2.innerHTML = `General score: ${roundScore2}`;
        }, 100)

    } else if (player2Score === 5) {
        setTimeout(() => {
            alert("Player 2 won the game");
            player1Score = 0;
            player2Score = 0;
            player1ScorePanel.innerHTML = 'Score: 0';
            player2ScorePanel.innerHTML = 'Score: 0';
            roundScore2++
            winInfoPanel1.innerHTML = `General score: ${roundScore1}`;
            winInfoPanel2.innerHTML = `General score: ${roundScore2}`;
        }, 100)

    }
}

window.onkeypress = startGame;