var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");

var otherAnswer = document.querySelector(".other-answer");
var playerAnswer = document.querySelector(".player-answer");
var winLose = document.querySelector(".win-lose");

let wins = 0;
let ties = 0;
let losses = 0;
let totalRuns = 0;

let yourAnswer = "";
let computerAnswer = "";

function choseWinner() {
    if (yourAnswer == "Rock" && computerAnswer == "Rock") {
        winLose.textContent = "TIE!"
        ties++
    }
    else if(yourAnswer == "Rock" && computerAnswer == "Paper") {
        winLose.textContent = "LOSER!"
        losses++
    }
    else if(yourAnswer == "Rock" && computerAnswer == "Scissors") {
        winLose.textContent = "WINNER!"
        wins++
    }
    else if(yourAnswer == "Paper" && computerAnswer == "Rock") {
        winLose.textContent = "WINNER!"
        wins++
    }
    else if(yourAnswer == "Paper" && computerAnswer == "Paper") {
        winLose.textContent = "TIE!"
        ties++
    }
    else if(yourAnswer == "Paper" && computerAnswer == "Scissors") {
        winLose.textContent = "LOSER!"
        losses++
    }
    else if(yourAnswer == "Scissors" && computerAnswer == "Rock") {
        winLose.textContent = "LOSER!"
        losses++
    }
    else if(yourAnswer == "Scissors" && computerAnswer == "Paper") {
        winLose.textContent = "WINNER!"
        wins++
    }
    else if(yourAnswer == "Scissors" && computerAnswer == "Scissors") {
        winLose.textContent = "TIE!"
        ties++
    };
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
        totalRuns++
    });
};

if (paper) {
    paper.addEventListener("click", function() {
        playerAnswer.textContent = "You: Paper";
        yourAnswer = "Paper";
        makeOtherAnswer();
        totalRuns++
    });
};

if (scissors) {
    scissors.addEventListener("click", function() {
        playerAnswer.textContent = "You: Scissors";
        yourAnswer = "Scissors";
        makeOtherAnswer();
        totalRuns++
    });
};