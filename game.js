// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Function to start the game
function startGame() {
  const randomNumber = generateRandomNumber();
  let attempts = 0;
  const maxAttempts = 5; // Adjust this number as per your preference

  while (attempts < maxAttempts) {
    let guess = prompt(
      `Guess the number (between 1 and 100). You have ${
        maxAttempts - attempts
      } attempts left.`
    );

    // Check if the user wants to quit
    if (guess === null) {
      alert("You have quit the game.");
      break;
    }

    guess = parseInt(guess);

    // Validate the user's input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      continue;
    }

    // Check if the guess is correct
    if (guess === randomNumber) {
      alert(
        `Congratulations! You guessed the number ${randomNumber} correctly in ${
          attempts + 1
        } attempts.`
      );
      break;
    } else {
      // Provide feedback to the user
      if (guess < randomNumber) {
        alert("Too low. Try again.");
      } else {
        alert("Too high. Try again.");
      }
      attempts++;
    }
  }

  // If all attempts are used up without guessing correctly
  if (attempts === maxAttempts) {
    alert(`Game over! The number was ${randomNumber}. Better luck next time!`);
  }
}

// Start the game when the page loads (you can trigger this function on a button click or any other event)
startGame();
