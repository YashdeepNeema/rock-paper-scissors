const choices = ["rock", "paper", "scissors"]

function getComputersChoice(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function playRound(pc, cc){
    pc = pc.toLowerCase();
    if(pc===cc){return `Tie! Both players got ${pc}`}
    if((pc==="rock" && cc==="paper")||(pc==="paper" && cc==="scissors")||(pc==="scissors" && cc==="rock")){
        return `You Lose! ${cc} beats ${pc}`;
    }
    return `You Win! ${pc} beats ${cc}`
}

const p = "paper"
const c = getComputersChoice(choices)
alert(playRound(p, c))

