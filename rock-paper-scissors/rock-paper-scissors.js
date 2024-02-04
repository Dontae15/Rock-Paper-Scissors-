function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) +1;
    if (computerChoice == 1) {
        return 'Paper';
    } else if (computerChoice == 2) {
        return 'Rock';
    } else if (computerChoice == 3) {
        return 'Scissors';
    }
}


function game (userChoice, computerChoice) {
   
    console.log(`User Choice: ${userChoice}`)
    console.log(`Computer Choice: ${computerChoice}`)

    if (userChoice == computerChoice) {
        console.log('The game is a draw.')
    } else {
    switch (userChoice + computerChoice) {
        case 'rockscissors' :
        case 'paperrock' :
        case 'scissorspaper':
        console.log('You win!')
        break;
        
        case 'scissorsrock' :
        case 'rockpaper' :
        case 'paperscissors' :
        console.log('You lose')
        break;

        }
    } 
}
  
 
  




function playGame () {
    let userChoice = prompt('Pick Rock, Paper, or scissors').toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    game(userChoice, computerChoice);
    
}

playGame();