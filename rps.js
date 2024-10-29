
function playGame(){

    const prompt = require('prompt-sync')(); 

let choices =["rock","paper","scissors"]

function getComputerChoice(){
     let random = Math.floor(Math.random()*3)
     return choices[random]
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ").toLowerCase();;
    return choice;
}

let humanScore=0;
let computerScore =0;

function playRound(humanChoice ,computerChoice){
    humanChoice=getHumanChoice()
    computerChoice=getComputerChoice()

    console.log("You chose "+ humanChoice + " computer chose " +computerChoice)
    if(humanChoice==computerChoice){
        console.log("Draw")
    }
    else if(humanChoice=="rock"&&computerChoice=="paper"){
        console.log("You lost")
        computerScore++
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"){
        console.log("You win")
        humanScore++
    }
    else if(humanChoice=="scissors"&&computerChoice=="rock"){
        console.log("You lost")
        computerScore++
    }
    else if(humanChoice=="scissors"&&computerChoice=="paper"){
        console.log("You win")
        humanScore++
    }
    else if(humanChoice=="paper"&&computerChoice=="scissors"){
        console.log("You lost")
        computerScore++
    }
    else if(humanChoice=="paper"&&computerChoice=="rock"){
        console.log("You win")
        humanScore++
    }
}
playRound()
playRound()
playRound()
playRound()
playRound()

console.log("You: "+ humanScore +" Computer: " + computerScore)
}

playGame()