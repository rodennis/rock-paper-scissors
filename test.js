let pick = ["rock", "paper", "scissors"];

function computerPlay() {
    let compChoice = pick[ Math.floor(Math.random() * pick.length)]
}

function playerSelection() {
    let playChoice = ["rock", "paper", "scissors"] 
}

prompt ("Choose your weapon rock, paper, or scissors?")

function startRound() {

    if (playerSelection() === playChoice[0] && computerPlay() === pick[2] || 
        playerSelection() === playChoice[1] && computerPlay() === pick[0] ||
        playerSelection() === playChoice[2] && computerPlay() === pick[1]) {
        alert("The person who isn't a computer won!")
        }

    else if (playerSelection() === playChoice[0] && computerPlay() === pick[1] || 
            playerSelection() === playChoice[1] && computerPlay() === pick[2] ||
            playerSelection() === playChoice[2] && computerPlay() === pick[0]) {
            alert("The person who is a computer won!")
            }

    else (playerSelection() === computerPlay()) 
        alert("It's a draw!")
}

// player gets prompted to enter rock, paper, or scissors and whatever you type in gets printed to the console and nothing else happens *//


