// GAME
let computerPoint = 0;
let playerPoint = 0;

function getComputerChoice() {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    resultComputer = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    computerChoiceDisplay.innerHTML = resultComputer
    return resultComputer
}

function playRound() {
    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection)  {
        result = ("It's a tie! You both picked " + playerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoint = ++playerPoint;
        result = ("You won! Rock beats scissors!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoint = ++playerPoint;
        result = ("You won! Paper beats rock!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoint = ++playerPoint;
        result = ("You won! Scissors beat paper!");
    } else {
        computerPoint = ++computerPoint;
        result = ("You lost! The computer chose " + resultComputer + ", which beats " + playerSelection + ".");
    } 
    resultDisplay.innerHTML = result
    playerScore.innerHTML = playerPoint
    computerScore.innerHTML = computerPoint

    if (playerPoint >= 5) {
        resultDisplay.innerHTML = result + " Game over! You reached 5 points before the computer!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        } else if (computerPoint >= 5) {
        resultDisplay.innerHTML = result + " Game over, the computer has reached 5 points first."
       rockBtn.disabled = true;
       paperBtn.disabled = true;
       scissorsBtn.disabled = true;
        }
}


function gameOver() {
    return playerPoint === 5 || computerPoint === 5
}




// UI
const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
let playerChoice

rockBtn.addEventListener("click", (e) => {
    playerChoice = "rock"
    playerChoiceDisplay.innerHTML = playerChoice
})
paperBtn.addEventListener("click", (e) => {
    playerChoice = "paper"
    playerChoiceDisplay.innerHTML = playerChoice
})
scissorsBtn.addEventListener("click", (e) => {
    playerChoice = "scissors"
    playerChoiceDisplay.innerHTML = playerChoice
})

rockBtn.addEventListener("click", playRound)
paperBtn.addEventListener("click", playRound)
scissorsBtn.addEventListener("click", playRound)


// RESTARTS GAME
resetBtn.addEventListener("click", () => {
    window.location.reload();
});