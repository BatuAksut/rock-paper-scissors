
let rock= document.querySelector("#rock")
let paper= document.querySelector("#paper")
let scissors= document.querySelector("#scissors")
let reset = document.querySelector("#reset")

rock.addEventListener("click",playRound)
paper.addEventListener("click",playRound)
scissors.addEventListener("click",playRound)
reset.addEventListener("click",resetGame)

let choices =["rock","paper","scissors"]
let humanScore=0;
let computerScore =0;


function getComputerChoice(){
     let random = Math.floor(Math.random()*3)
     return choices[random]
}




function playRound(event){
    if (humanScore >= 5 || computerScore >= 5) {
        return;  
    }
    humanChoice=event.target.id;
    computerChoice=getComputerChoice()
    let resultDiv = document.querySelector("#result");

    if (humanChoice === computerChoice) {
        resultDiv.innerText = `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a draw!`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultDiv.innerText = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`;
    } else {
        computerScore++;
        resultDiv.innerText = `You chose ${humanChoice}. Computer chose ${computerChoice}. You lose!`;
    }
    if(humanScore<5 && computerScore<5){
        resultDiv.innerText += `\nScore - You: ${humanScore} | Computer: ${computerScore}`;
    }
    else if(humanScore===5){
        resultDiv.innerText =""
        resultDiv.innerText += ` Winner is you with ${humanScore} points`;
    }
    else{
        resultDiv.innerText =""
        resultDiv.innerText += ` Winner is computer with ${computerScore} points`;
    }
    
}


function resetGame(){
    let resultDiv = document.querySelector("#result");
    resultDiv.innerText =""
    humanScore=0;
    computerScore=0;

}




