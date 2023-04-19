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
//player selection function return paper scissor or rock
function playerSelection() {
  let userInput = prompt("Choose rock paper or scissor").toLowerCase();
  if (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissor"
  ) {
    alert("Please type rock paper or scissor!");
    //repeats if input was incorrect
    return playerSelection();
  } else {
    return userInput;
  }
}

// 2 Write function that plays one round of Rock Paper Scissors
// function take two params playerSelection adn computerSelection returns a string that declares winner of round
//    - function that takes two args (Rock paper scissor) compares them according to RPS rules and return winner player or computer
function playRound(computerSelection, playerSelection) {
  let playerChoice = playerSelection();
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

// 3 Write new function game()
// use it to play 5 round game that keeps score and reports winner
function game() {
  let playerScores = 0;
  let computerScores = 0;
  for (let index = 0; index < 5; index++) {
    let winner = playRound(computerSelection, playerSelection);
    if (winner === "Player") {
      playerScores++;
      console.log(
        `Player wins this round! Player Score ${playerScores} Computer Score ${computerScores} `
      );
    } else if (winner === "Computer") {
      computerScores++;
      console.log(
        `Computer wins this round! Computer Score ${computerScores} Player Score ${playerScores}`
      );
    } else console.log("Draw! no scores");
  }
  if (playerScores > computerScores) return "Player won!";
  else if (playerScores < computerScores) return "Computer Won";
  else return "It's a Draw!";
}
// use console.log() to display the results of each round and winner

console.log(game());
