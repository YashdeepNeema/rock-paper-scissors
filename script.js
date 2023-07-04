const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choicesArr){
    let i = Math.floor(Math.random() * choicesArr.length)
    return choicesArr[i]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (computerSelection == playerSelection) return `Tie!`

    else if(computerSelection == 'paper'){
        if(playerSelection == 'scissors') {
            return `You Won! ${playerSelection} beats ${computerSelection}` 
        }
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

    else if(computerSelection == 'scissors'){
        if(playerSelection == 'rock') {
            return `You Won! ${playerSelection} beats ${computerSelection}` 
        }
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

    else if(computerSelection == 'rock'){
        if(playerSelection == 'paper') {
            return `You Won! ${playerSelection} beats ${computerSelection}` 
        }
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}



function game(n){
    let i = 1;
    while (i <= n){
        let playerSelection = prompt(`Round: ${i} \nYour Choice?`)
        i++;
    }
}
