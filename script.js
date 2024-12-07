
const prompt = require("prompt-sync")(); // Import prompt-sync for user input

// Function to get computer's choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner of a single round
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

// Main function to play the game
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 5;

  console.log("Welcome to Rock-Paper-Scissors! Best of 5 rounds wins.");

  for (let round = 1; round <= rounds; round++) {
    console.log(`\nRound ${round}:`);
    const playerChoice = prompt("Enter Rock, Paper, or Scissors: ").trim();
    const computerChoice = getComputerChoice();

    if (!["Rock", "Paper", "Scissors"].includes(playerChoice)) {
      console.log("Invalid input! Please choose Rock, Paper, or Scissors.");
      round--; // Retry this round
      continue;
    }

    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const roundWinner = determineWinner(playerChoice, computerChoice);

    if (roundWinner === "Player") {
      console.log("You win this round!");
      playerScore++;
    } else if (roundWinner === "Computer") {
      console.log("Computer wins this round!");
      computerScore++;
    } else {
      console.log("This round is a tie!");
    }

    console.log(`Score => You: ${playerScore}, Computer: ${computerScore}`);
  }

  console.log("\nGame Over!");
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > playerScore) {
    console.log("The computer wins the game. Better luck next time!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();

