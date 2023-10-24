let weaponSelection = ["Rock", "Paper", 'Scissors'];
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const gameScreen = document.querySelector('#gameScreen')
const gameBoard = document.querySelector('#gameBoard')
let totalPlayerScore = 0
let totalComputerScore = 0

function getComputerChoice(playerChoice) {
    let randomInt = Math.floor(Math.random() * 3)
    let computerChoice
    if(randomInt == 0){
        computerChoice = 'rock'
    } else if(randomInt == 1){
        computerChoice = 'paper'
    } else{
        computerChoice = 'scissors'
    }
    const computerMove = document.createElement('li')

    let computerMoveString = `Computer chose ${computerChoice}`
    computerMove.textContent = computerMoveString
    computerMove.classList.add('computerTurn')

    gameBoard.appendChild(computerMove)
    console.log(playerChoice + " " + computerChoice)
    gameRound(playerChoice, computerChoice)
};


rockButton.addEventListener('click', getPlayerChoice)
paperButton.addEventListener('click', getPlayerChoice)
scissorsButton.addEventListener('click', getPlayerChoice)

function getPlayerChoice(playerSelection) {
    let playerSelectionString = (playerSelection.target.value).toString()
    const playerMove = document.createElement('li')

    let playerMoveString = `You chose ${playerSelectionString}`
    playerMove.textContent = playerMoveString
    playerMove.classList.add('playerTurn')

    gameBoard.appendChild(playerMove)
    getComputerChoice(playerSelectionString)


}

function gameRound(playerChoice, computerChoice) {
    let playerScore = 0
    console.log(playerChoice + " " + computerChoice)
    if (playerChoice == computerChoice) {
        playerScore = 'draw'
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        playerScore = 'win'
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        playerScore = 'win'
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        playerScore = 'win'
    } else {
        playerScore = 'lose'
    };
    console.log('current score to add ' + playerScore)
    updateTotalScores(playerScore)
}

function updateTotalScores(playerScore) {
    if (playerScore == 'lose'){
        totalComputerScore += 1
    } else if(playerScore == 'win'){
        totalPlayerScore += 1
    }
    checkScore()

    console.log(totalComputerScore + " " + totalPlayerScore)
}

function checkScore(){
    if(totalPlayerScore == 5){
        gameOver('player')
    } else if(totalComputerScore == 5){
        gameOver('computer')
    }
}

function gameOver(winner){
    if(winner == 'player'){
        gameBoard.textContent="Well Done you Win!"
    } else{
        gameBoard.textContent="Boo, you lose!"
    }
}


