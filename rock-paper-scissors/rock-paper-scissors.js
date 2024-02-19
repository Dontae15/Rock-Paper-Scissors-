document.addEventListener('DOMContentLoaded', () => {
    const rockBtn = document.getElementById('rockbtn');
    const paperBtn = document.getElementById('paperbtn');
    const scissorsBtn = document.getElementById('Scissorsbtn');
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score'); // Ensure you have a div with id="score" in your HTML

    let playerScore = 0;
    let computerScore = 0;

    function updateScore() {
        scoreDiv.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    }

    function checkForWinner() {
        if (playerScore === 5 || computerScore === 5) {
            const winner = playerScore === 5 ? 'Player' : 'Computer';
            resultDiv.textContent = `${winner} wins the game!`;
            playerScore = 0; // Reset scores
            computerScore = 0;
            updateScore(); // Update score display
            return true;
        }
        return false;
    }

    function updateResult(message) {
        resultDiv.textContent = message;
    }

    function getComputerChoice() {
        const choices = ['paper', 'rock', 'scissors'];
        const index = Math.floor(Math.random() * 3);
        return choices[index];
    }

    function game(userChoice) {
        let computerChoice = getComputerChoice();
        updateResult(`User Choice: ${userChoice} | Computer Choice: ${computerChoice}`);

        if (userChoice === computerChoice) {
            updateResult('The round is a draw.');
        } else {
            let roundWon = false;
            switch (userChoice + computerChoice) {
                case 'rockscissors':
                case 'paperrock':
                case 'scissorspaper':
                    playerScore++;
                    roundWon = true;
                    break;
                case 'scissorsrock':
                case 'rockpaper':
                case 'paperscissors':
                    computerScore++;
                    break;
            }
            if (roundWon) {
                updateResult('You win this round!');
            } else {
                updateResult('You lose this round.');
            }
            updateScore();

            if (checkForWinner()) { // Check if there's a winner
                return; // End the game if there's a winner
            }
        }
    }

    rockBtn.addEventListener('click', () => game('rock'));
    paperBtn.addEventListener('click', () => game('paper'));
    scissorsBtn.addEventListener('click', () => game('scissors'));

    updateScore(); // Initialize score display
});
