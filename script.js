function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Won! Scissors beat Paper";
        } 
        else if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors!";
        }
        return "Tie!";
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Won! Paper beat Rocks";
        } 
        else if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper!";
        }
        return "Tie!";
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Won! Rock beats Scissors";
        } 
        else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock!";
        }
        return "Tie!";
    }
  }

/*
  function game() {

    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);


        if (result == "You Won! Rock beats Scissors" || result == "You Won! Paper beat Rocks" || result == "You Won! Scissors beat Paper") {
            playerScore++;
        } 
        else if (result === "TIE!") {
            computerScore++;
            playerScore++;
        } 
        else {
            computerScore++;
        }

        console.log(result);
        console.log(playerScore, computerScore);
    }
  }
*/

//Task 2


//Butoanele propriu zise
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

//const rezultat = document.querySelector('.result');
//console.log(result);

//Afisarea rezultatului
const result = document.querySelector('.result');

//Adaptarea functiilor
function event1() {
    result.textContent = playRound('rock', getComputerChoice());
   
}

function event2() {
    result.textContent = playRound('paper', getComputerChoice());
    
}

function event3() {
    result.textContent = playRound('scissors', getComputerChoice());
    
}


btn1.addEventListener('click', event1);
btn2.addEventListener('click', event2);
btn3.addEventListener('click', event3);



