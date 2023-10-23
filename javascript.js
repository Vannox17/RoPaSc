function getComputerChoice(){
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let choices = options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection() == computerSelection()){
    return "No one win, it's a draw";
    }else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return  "You win, Rock beat Scissors";
    }else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return  "You win, Scissors beat Paper";
    }else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return  "You win, Paper beat Rock";
    }else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        return  "You lose, Rock beat Paper";
    }else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return  "You lose, Scissors beat Paper";
    }else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return  "You lose, Scissors beat Rock";
}
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));