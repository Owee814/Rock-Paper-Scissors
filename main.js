var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var otherAnswer = document.querySelector(".other-answer");
var playerAnswer = document.querySelector(".player-answer");
var winLose = document.querySelector(".win-lose");

function makeOtherAnswer() {
    let answerNumber = Math.floor(Math.random() * 3) + 1;
    if (answerNumber == 1) {
        otherAnswer.textContent = "Rock";
    }
    else if (answerNumber == 2) {
        otherAnswer.textContent = "Paper";
    }
    else if (answerNumber == 3) {
        otherAnswer.textContent = "Scissors";
    };
};

if (rock) {
    rock.addEventListener("click", function() {
        playerAnswer.textContent = "You: Rock";
        makeOtherAnswer();
    });
};

if (paper) {
    paper.addEventListener("click", function() {
        playerAnswer.textContent = "You: Paper";
        makeOtherAnswer();
    });
};

if (scissors) {
    scissors.addEventListener("click", function() {
        playerAnswer.textContent = "You: Scissors";
        makeOtherAnswer();
    });
};