let pick = ["rock", "paper", "scissors"]

function computerPlay() {
    let compChoice = pick[ Math.floor(Math.random() * pick.length) ]
    return compChoice
}     
function playerSelection() { 
    let playChoice = ("")
}

prompt("make a selection rock, paper, or scissors?")

if (playerSelection() === computerPlay()){
    alert ("It's a tie!")
} 
else if (playerSelection() === "scissors" && computerPlay() === "rock") {
    
    alert ("Rock beats Scissors! Computer wins");
}
else if (playerSelection() === "rock" && computerPlay() === "scissors") {
   
    alert ("Rock beats Scissors! Player wins")
}
else if (playerSelection() === "rock" && computerPlay() === "paper") {
    
    alert ("Paper beats Rock! Computer wins")
}
else if (playerSelection() === "paper" && computerPlay() === "rock") {
   
    alert ("Paper beats Rock! Player wins")
}
else if (playerSelection() === "paper" && computerPlay() === "scissors") {
    
    alert ("Scissors beats Paper! Computer wins");
}
else if (playerSelection() === "scissors" && computerPlay() === "paper") {
   
    alert ("Scissors beats Paper! Player wins");
}

    