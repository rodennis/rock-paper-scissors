let pick = ["rock", "paper", "scissors"];
let compChoice = pick[ Math.floor(Math.random() * pick.length)]

let playSelect = window.prompt ("Choose your weapon rock, paper, or scissors?")

function startRound() {

    if (playSelect === "rock" && compChoice === "scissors" || 
        playSelect === "scissors" && compChoice === "paper" ||
        playSelect === "paper" && compChoice === "rock") {
        alert("The person who isn't a computer won!")
        }

    else if (playSelect === "rock" && compChoice === "paper" || 
            playSelect === "scissors" && compChoice === "rock" ||
            playSelect === "paper" && compChoice === "scissors") {
            alert("The person who is a computer won!")
            }

    else {
        alert("It's a draw!");
    }
}

startRound()






    