let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    let userDistance = userGuess > secretTarget ? (userGuess - secretTarget) : (secretTarget - userGuess);
    let computerDistance = computerGuess > secretTarget ? (computerGuess - secretTarget) : (secretTarget - computerGuess);

    if (userDistance < computerDistance || userDistance === computerDistance) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    winner.toLowerCase() === 'human' ? humanScore += 1 : computerScore += 1;
}

const advanceRound = () => currentRoundNumber += 1;

