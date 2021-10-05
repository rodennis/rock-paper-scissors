const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', () => {
    let playSelect = "rock"
    let pick = ["rock", "paper", "scissors"];
    let compChoice = pick[ Math.floor(Math.random() * pick.length)]

    if (playSelect === "rock" && compChoice === "scissors") {
        alert("Player has won this round!")
    }
 
    else if (playSelect === "rock" && compChoice === "paper") {
        alert("Computer has won this round!")
    }
 
    else {
        alert("It's a tie!")
    }
})

paper.addEventListener('click', () => {
    let playSelect = "paper"
    let pick = ["rock", "paper", "scissors"];
    let compChoice = pick[ Math.floor(Math.random() * pick.length)]

    if (playSelect === "paper" && compChoice === "rock") {
        alert("Player has won this round!")
    }
 
    else if (playSelect === "paper" && compChoice === "scissors") {
        alert("Computer has won this round!")
    }
 
    else {
        alert("It's a tie!")
    }
})
  
scissors.addEventListener('click', () => {
    let playSelect = "scissors"
    let pick = ["rock", "paper", "scissors"];
    let compChoice = pick[ Math.floor(Math.random() * pick.length)]

    if (playSelect === "scissors" && compChoice === "paper") {
        alert("Player has won this round!")
    }
 
    else if (playSelect === "scissors" && compChoice === "rock") {
        alert("Computer has won this round!")
    }
 
    else {
        alert("It's a tie!")
    }
})      