// GAME
let computerPoint = 0;
let playerPoint = 0;

function getComputerChoice() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    resultComputer = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    computerChoiceDisplay.innerHTML = resultComputer
    return resultComputer
}

function playRound() {
    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection)  {
        result = ("It's a tie!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerPoint = ++playerPoint;
        result = ("You won! Rock > Scissors.")
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerPoint = ++playerPoint;
        result = ("You won! Paper > Rock.")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerPoint = ++playerPoint;
        result = ("You won! Scissors > Paper.");
    } else {
        computerPoint = ++computerPoint;
        result = ("You lost! " + playerSelection + " < " + resultComputer + ".");
    } 
    resultDisplay.innerHTML = result
    playerScore.innerHTML = playerPoint
    computerScore.innerHTML = computerPoint

    if (playerPoint >= 5) {
        resultDisplay.innerHTML = result + " Congratulations, you reached 5 points before the computer!"
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
    playerChoice = "Rock"
    playerChoiceDisplay.innerHTML = playerChoice
})
paperBtn.addEventListener("click", (e) => {
    playerChoice = "Paper"
    playerChoiceDisplay.innerHTML = playerChoice
})
scissorsBtn.addEventListener("click", (e) => {
    playerChoice = "Scissors"
    playerChoiceDisplay.innerHTML = playerChoice
})

rockBtn.addEventListener("click", playRound)
paperBtn.addEventListener("click", playRound)
scissorsBtn.addEventListener("click", playRound)


// RESTARTS GAME
resetBtn.addEventListener("click", () => {
    window.location.reload();
});