const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;



function getComputersChoice(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function playRound(pc, cc){
    pc = pc.toLowerCase();
    console.log(pc, cc)
    if(pc===cc){
        return 'tie';
    }
    if((pc==="rock" && cc==="paper")||(pc==="paper" && cc==="scissors")||(pc==="scissors" && cc==="rock")){
        return `lose`;
    }
    return `win`;
}
let buttons = document.querySelectorAll('button');
buttons = [...buttons];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const cc = getComputersChoice(choices)
        document.querySelector("#playerChoice").textContent = `Player's Choice: ${button.id}`;
        document.querySelector("#computerChoice").textContent = `Computer's Choice: ${cc}`;
        let result = playRound(button.id, cc);

        if (result === 'win'){
            playerScore++
            document.querySelector("#status").textContent = `You won this round!`
        }
        else if (result === 'lose'){
            computerScore++
            document.querySelector("#status").textContent = `You lost this round!`
        }
        else{
            document.querySelector("#status").textContent = `This round is a tie!`
        }

        document.querySelector("#playerScore").textContent = `Player's score: ${playerScore}`;
        document.querySelector("#computerScore").textContent = `Computer's score: ${computerScore}`;
    })
})