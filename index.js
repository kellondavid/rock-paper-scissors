function getPlayerChoice() {
    let response = prompt("Choose rock, paper, or scissors.");
        response = response.toLowerCase();
    return response;
}
    
function getComputerChoice() {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}


let computerPoint = 0;
let playerPoint = 0;

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection)  {
        return ("It's a tie! You both picked " + playerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoint = ++playerPoint;
        return ("You won! Rock beats scissors!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoint = ++playerPoint;
        return ("You won! Paper beats rock!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoint = ++playerPoint;
        return ("You won! Scissors beat paper!");
    } else {
        computerPoint = ++computerPoint;
        return ("You lost! The computer chose " + computerSelection + ", which beats " + playerSelection + ".");
    } 
}


function game() {
    for (let i = 0; i < 5; i++) {
     console.log(playRound())
    }
}

function winner() {
    if (playerPoint === computerPoint) {
        return ("It's a draw!");
    } else if (playerPoint > computerPoint) {
        return ("You beat the computer out of 5 rounds!");
    } else if (computerPoint > playerPoint) {
        return ("You lost to the computer out of 5 rounds!");
    }
}

game();
console.log(winner());