var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");

var otherAnswer = document.querySelector(".other-answer");
var playerAnswer = document.querySelector(".player-answer");
var winLose = document.querySelector(".win-lose");

var winsPercent = document.querySelector(".wins-percent");
var tiesPercent = document.querySelector(".ties-percent");
var lossesPercent = document.querySelector(".losses-percent");

let wins = 0;
let ties = 0;
let losses = 0;
let totalRuns = 0;

let yourAnswer = "";
let computerAnswer = "";

function roundUpNearest10(num) {
    return Math.ceil(num / 0.1) * 0.1;
};

function choseWinner() {
    if (yourAnswer == "Rock" && computerAnswer == "Rock") {
        winLose.textContent = "TIE!";
        ties++;
    }
    else if(yourAnswer == "Rock" && computerAnswer == "Paper") {
        winLose.textContent = "LOSER!";
        losses++;
    }
    else if(yourAnswer == "Rock" && computerAnswer == "Scissors") {
        winLose.textContent = "WINNER!";
        wins++;
    }
    else if(yourAnswer == "Paper" && computerAnswer == "Rock") {
        winLose.textContent = "WINNER!";
        wins++;
    }
    else if(yourAnswer == "Paper" && computerAnswer == "Paper") {
        winLose.textContent = "TIE!";
        ties++;
    }
    else if(yourAnswer == "Paper" && computerAnswer == "Scissors") {
        winLose.textContent = "LOSER!";
        losses++;
    }
    else if(yourAnswer == "Scissors" && computerAnswer == "Rock") {
        winLose.textContent = "LOSER!";
        losses++;
    }
    else if(yourAnswer == "Scissors" && computerAnswer == "Paper") {
        winLose.textContent = "WINNER!";
        wins++;
    }
    else if(yourAnswer == "Scissors" && computerAnswer == "Scissors") {
        winLose.textContent = "TIE!";
        ties++;
    };

    winsPercent.textContent = "Wins: " + roundUpNearest10(wins/(wins+ties+losses) * 100).toString() + "%";
    tiesPercent.textContent = "Ties: " + roundUpNearest10(ties/(wins+ties+losses) * 100).toString() + "%";
    lossesPercent.textContent = "Losses: " + roundUpNearest10(losses/(wins+ties+losses) * 100).toString() + "%";
};

function makeOtherAnswer() {
    let answerNumber = Math.floor(Math.random() * 3) + 1;
    if (answerNumber == 1) {
        otherAnswer.textContent = "Computer: Rock";
        computerAnswer = "Rock";
    }
    else if (answerNumber == 2) {
        otherAnswer.textContent = "Computer: Paper";
        computerAnswer = "Paper";
    }
    else if (answerNumber == 3) {
        otherAnswer.textContent = "Computer: Scissors";
        computerAnswer = "Scissors";
    };

    choseWinner();
};

if (rock) {
    rock.addEventListener("click", function() {
        playerAnswer.textContent = "You: Rock";
        yourAnswer = "Rock";
        makeOtherAnswer();
        totalRuns++;
    });
};

if (paper) {
    paper.addEventListener("click", function() {
        playerAnswer.textContent = "You: Paper";
        yourAnswer = "Paper";
        makeOtherAnswer();
        totalRuns++;
    });
};

if (scissors) {
    scissors.addEventListener("click", function() {
        playerAnswer.textContent = "You: Scissors";
        yourAnswer = "Scissors";
        makeOtherAnswer();
        totalRuns++;
    });
};