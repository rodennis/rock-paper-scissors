    let pick = ["rock", "paper", "scissors"]
    let result;

    function computerPlay() {
        let compChoice = pick[ Math.floor(Math.random() * pick.length) ]
        return compChoice
    }
    function playerSelection() {
        let playChoice = ["rock", "paper", "scissors"]
           return playChoice
    }
            prompt("make a selection rock, paper, or scissors?")

    function playRound(playerSelection, computerPlay) {

        if (playerSelection() === computerPlay()) {
            alert ("its a draw")
        }
        else if (
            computerPlay() === "rock" && playerSelection() === "scissors" || computerPlay() === "scissors" && playerSelection() === "paper" || computerPlay() === "paper" && playerSelection() === "rock"
            ) 
            {
            alert ("Computer has won!")
        }
        else if (
            playerSelection() === "rock" && computerPlay() === "scissors" || playerSelection() === "scissors" && computerPlay() === "paper" || playerSelection() === "paper" && computerPlay() === "rock"
            )
            {
            alert ("player has won!")
        }
        playRound()
    }
       
    