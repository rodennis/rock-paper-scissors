let pick = ["rock", "paper", "scissors"]

function computerPlay() {
    let compChoice = pick[ Math.floor(Math.random() * pick.length) ]
    return compChoice
}
function playerSelection() {
    let playChoice = ("")
}       
    let playChoice = prompt("make a selection rock, paper, scissors?")

    if (playChoice === compChoice) {
        alert ("its a draw")
    }
    else if (compChoice === "rock" && playChoice === "scissors" || compChoice === "scissors" && playChoice === "paper" || compChoice === "paper" && playChoice === "rock") {
        alert ("Computer has won!");
    }
    else (playChoice === "rock" && compChoice === "scissors" || playChoice === "scissors" && compChoice === "paper" || playChoice === "paper" && compChoice === "rock"); {
        alert ("player has won!")
    }

    