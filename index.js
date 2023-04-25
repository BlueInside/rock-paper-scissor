// 1 We will play against computer that randomly return Rock paper or scissor
//   - function that returns "Rock" "Paper" or "Scissor" randomly
function computerSelection() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let result = "";
  if (randomNum === 1) result = "Rock";
  else if (randomNum === 2) result = "Paper";
  else result = "Scissor";
  return result.toLowerCase();
}

// 2 Write function that plays one round of Rock Paper Scissors
// function take two params playerSelection adn computerSelection returns a string that declares winner of round
//    - function that takes two args (Rock paper scissor) compares them according to RPS rules and return winner player or computer
function playRound(computerSelection, playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  let computerChoice = computerSelection();
  // log to the user choices
  console.log(`
  Player chose:     ${playerChoice}
  Computer chose:   ${computerChoice}
  `);
  let winner = "";
  // logic that compares players choices
  // when computer wins
  if (
    (computerChoice === "rock" && playerChoice === "scissor") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissor" && playerChoice === "paper")
  ) {
    winner = "Computer";
  } else if (computerChoice === playerChoice) winner = "Draw";
  else winner = "Player";
  return winner;
}
// add event listener for each button on page
// play round with appropriate player selector
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(computerSelection, button.textContent);
  });
});
