var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var otherAnswer = document.querySelector(".other-answer");
var playerAnswer = document.querySelector(".player-answer");
var winLose = document.querySelector(".win-lose");
let answers = ["Rock", "Paper", "Scissors"];

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