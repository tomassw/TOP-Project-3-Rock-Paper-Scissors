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


  function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
  }

 
