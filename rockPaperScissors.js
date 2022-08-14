// Create a function that gets the user input
const getUserChoice = (userInput) => {
    // Force the answer to be in lower case
    userInput = userInput.toLowerCase();
    // If the selection is valid, return in
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      // If not send an error message
      console.log("Please provide a valid imput.")
    }
  }
  
  // Using a random number generator assign each number to a selection and return this as the computer choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'paper';
        break;
      case 1:
        return 'scissors';
        break;
      case 2:
        return 'rock';
        break;  
    }
  }
  // Create a functions that compares the selections and determines a winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'User wins!'
      } else if (computerChoice === 'paper') {
        return 'It\'s a tie!'
      } else if (computerChoice === 'scissors') {
        return 'Computer wins!'
      }
    } else if (userChoice === 'rock') {
      if (computerChoice === 'rock') {
        return 'It\'s a tie!'
      } else if (computerChoice === 'paper') {
        return 'Computer Wins!'
      } else if (computerChoice === 'scissors') {
        return 'User Wins!'
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Wins!' 
      } else if (computerChoice === 'paper') {
        return 'User Wins!'
      } else if (computerChoice === 'scissors') {
        return 'It\'s a tie!'
      }
    }
  }
  
  // Create a function that runs all of our previous functions in order to play the game
  const playGame = () => {
    /* Store the the user's choice in a variable
    Place your choice here: */
    userChoice = getUserChoice('scissors');
    // Store the computer choice in a variable
    computerChoice = getComputerChoice('rock', 'paper', 'scissors');
    // Print the selections
    console.log(`The user chooses ${userChoice} and computer chooses ${computerChoice}.`)
    // Print the winner
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  // Run the game
  playGame();