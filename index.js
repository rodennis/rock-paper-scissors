let pick = ["rock", "paper", "scissors"];
let compChoice = pick[ Math.floor(Math.random() * pick.length)]
let playSelect = ["rock", "paper", "scissors"]

//let playSelect =  window.prompt("Choose your weapon rock, paper, or scissors?")//

const btn0 = document.querySelector("#rock");
btn0.addEventListener('click', () => {
  if (playSelect === "rock") {
    startRound()
  }
})

  const btn1 = document.querySelector("#paper");
btn1.addEventListener('click', () => {
  if (playSelect === "paper") {
    startRound()
  }
})
  
  const btn2 = document.querySelector("#scissors");
btn2.addEventListener('click', () => {
  if (playSelect === "scissors") {
    startRound()
  }
})  

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

    else if (playSelect != ["rock", "paper", "scissors"]) {
        alert ("incorrect input!")
    }

    else {
        alert("It's a draw!");
    }
}


startRound()












    