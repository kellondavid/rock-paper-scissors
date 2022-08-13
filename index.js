let playerSelection = prompt("Choose rock, paper, or scissors.");
    playerSelection = playerSelection.toLowerCase();
    
function getComputerChoice() {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}
const computerSelection = getComputerChoice();

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a tie! You both picked " + playerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You won! Rock beats scissors!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You won! Paper beats rock!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You won! Scissors beat paper!");
    } else {
        return ("You lost! The computer chose " + computerSelection + ", which beats " + playerSelection + ".");
    }
}
console.log(playRound(computerSelection, playerSelection))

function game(playRound) {
    for (let i = 0; i < 5; i++) {
       
    }
}