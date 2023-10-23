let weaponSelection = ["Rock", "Paper", 'Scissors'];

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3)
    return weaponSelection[randomInt]
};

console.log(getComputerChoice());

function getPlayerChoice(){
    let playerPrompt = prompt("Please choose either rock, paper or scissors");
    let lowerCasePlayer = playerPrompt.toLowerCase()
    if(lowerCasePlayer == "rock") {
        return weaponSelection[0]
    } else if (lowerCasePlayer == "paper"){
        return weaponSelection[1]
    } else if(lowerCasePlayer == "scissors")
    {return weaponSelection[2]} 
    else{
        console.log("Undefined")
    }
}

function gameRound(playerChoice, computerSelection){
    if (playerChoice == computerSelection){
        return 1
    } else if (playerChoice == "rock" && computerSelection == "scissors"){
        return 1
    } else if (playerChoice == "scissors" && computerSelection == "paper"){
        return 1
    } else if (playerChoice == "paper" && computerSelection == "scissors") {
        return 1
    } else{
        return 0
    }
}

function game(){
    let playerScore = gameRound(getPlayerChoice(), getComputerChoice())
    playerScore += gameRound(getPlayerChoice(), getComputerChoice())
    playerScore += gameRound(getPlayerChoice(), getComputerChoice())
    playerScore += gameRound(getPlayerChoice(), getComputerChoice())
    playerScore += gameRound(getPlayerChoice(), getComputerChoice())

    if (playerScore > 3) {
        return 'You Win!'
    } else{
        return 'You Lose!'
    }
}

console.log(game())

