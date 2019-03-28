function computerPlay(){
    var computerString = null; 
    
    switch(Math.floor(Math.random() * 3)) { //returns a random int from 0 to 2
        case 0:
            computerString = "rock";
            break;
        case 1:
            computerString = "scissors";
            break;
        case 2:
            computerString = "paper";
            break;
    }

    return computerString;
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "Tie Game. You both threw " + computerSelection;
        } else if(computerSelection == "scissors") {
            userGamesWon++;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection == "paper") {
            computerGamesWon++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            return "Game is Broken";
        }
    } else if (playerSelection == "scissors") {
        if(computerSelection == "rock"){
            computerGamesWon++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else if(computerSelection == "scissors") {
            return "Tie Game. You both threw " + computerSelection;
        } else if(computerSelection == "paper") {
            userGamesWon++;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        } else {
            return "Game is Broken";
        }
    } else if (playerSelection == "paper") {
        if(computerSelection == "rock"){
            userGamesWon++;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection == "scissors") {
            computerGamesWon++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else if(computerSelection == "paper") {
            return "Tie Game. You both threw " + computerSelection;
        } else {
            return "Game is Broken";
        }
    } else {
        return "Game is Broken";
    }
}


function whoWon(){
    if(userGamesWon>computerGamesWon) {
        return "Congrats, you won! You won " + userGamesWon + " out of 5 games. The computer won " + computerGamesWon + " game(s).";
    } else if(userGamesWon == computerGamesWon) {
        return "You tied with the computer"
    } else {
        return "Sorry, but you lose. The computer won " + computerGamesWon + " out of 5 games. You won " + userGamesWon + " game(s).";
    }
}

function resetGame(){

}


function game(e) {

    let userInput = this.id;
    userInput = userInput.toLowerCase();  
    
    console.log(playRound(userInput, computerPlay()));

    totalGamesPlayed++;
    
    if(totalGamesPlayed == 5){
        resetGame();
        console.log(whoWon());
    }
}



var userGamesWon = 0; //counter to keep track of total games user won
var computerGamesWon = 0;
var totalGamesPlayed = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', game));