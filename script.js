const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choicesArr){
    let i = Math.floor(Math.random() * choicesArr.length)
    return choicesArr[i]
}
