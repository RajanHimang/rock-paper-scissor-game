const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const playerScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

const computerPlay = function () {
  const choices = ["rock", "paper", "scissor"];
  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Its a tie`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You loose! ${computerSelection} beats ${playerSelection}`;
  }
};
