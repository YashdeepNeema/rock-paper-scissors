const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choicesArr){
    let i = Math.floor(Math.random() * choicesArr.length)
    return choicesArr[i]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (computerSelection == playerSelection) return `T`

    else if(computerSelection == 'paper'){
        if(playerSelection == 'scissors') {
            return `W` 
        }
        return `L`
    }

    else if(computerSelection == 'scissors'){
        if(playerSelection == 'rock') {
            return `W`  
        }
        return `L`
    }

    else if(computerSelection == 'rock'){
        if(playerSelection == 'paper') {
            return `W`  
        }
        return `L`
    }
}



function game(n, playerSelection){
    let i = 1;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    while (i <= n){
        //let playerSelection = prompt(`Round: ${i} \nYour Choice?`)

        let round = playRound(playerSelection, getComputerChoice(choices))
        
        if(round == 'W'){
            playerScore++
        }
        else if (round == 'L'){
            computerScore++
        }
        else if (round == 'T'){
            tieScore++
        }
        i++;
    }
    if (playerScore == computerScore){
        alert(`It's a Tie! \nYour score: ${playerScore}\nComputer Score: ${computerScore}\nTies: ${tieScore}`)
    }
    else if (playerScore > computerScore) {
        alert(`You Won! \nYour score: ${playerScore}\nComputer Score: ${computerScore}\nTies: ${tieScore}`)
    }
    else{
        alert(`You Lose! \nYour score: ${playerScore}\nComputer Score: ${computerScore}\nTies: ${tieScore}`)
    }
}

const buttons = document.querySelectorAll('button')

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const computerChoice = getComputerChoice(choices)
        const result = playRound(`${btn.id}`, computerChoice)
        
        document.querySelector('#playerChoice').innerHTML = `Player's Choice: ${btn.id.toUpperCase()}`
        document.querySelector('#computerChoice').innerHTML = `Computer's Choice: ${computerChoice.toUpperCase()}`


        if (playerScore >= 5 || computerScore >= 5) {
            if(playerScore >= 5){
                
                document.querySelector('#playerChoice').innerHTML = ''
                document.querySelector('#computerChoice').innerHTML = ''
                document.querySelector('#roundResult').innerHTML = `You Won!`
                document.querySelector('#resultReason').innerHTML = ''
            }
            else{
                
                document.querySelector('#playerChoice').innerHTML = ''
                document.querySelector('#computerChoice').innerHTML = ''
                document.querySelector('#roundResult').innerHTML = `Computer Won!`
                document.querySelector('#resultReason').innerHTML = ''
            }
        }
        else{
            if (result == 'W'){
                playerScore++
                document.querySelector('#roundResult').innerHTML = `You Won!`
                document.querySelector('#resultReason').innerHTML = `${btn.id.toUpperCase()} beats ${computerChoice.toUpperCase()}`
            }
            else if (result == "L"){
                computerScore++
                document.querySelector('#roundResult').innerHTML = `You Lose!`
                document.querySelector('#resultReason').innerHTML = `${computerChoice.toUpperCase()} beats ${btn.id.toUpperCase()}`
            }
            else{
                tieScore++
                document.querySelector('#roundResult').innerHTML = `Tie!`
                document.querySelector('#resultReason').innerHTML = ''
            }
        }


        

        document.querySelector('#playerScore').innerHTML = `Player's Score: ${playerScore}`
        document.querySelector('#computerScore').innerHTML = `Computer's Score: ${computerScore}`
    })
})