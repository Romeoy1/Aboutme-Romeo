let attempts = () => {
  let i = 1;
  let answer = Math.floor(Math.random() * 100);
  console.log(answer);
  alert(`Guess a number between 1-100`);
  while (i < 7) {
    let guess = prompt(`Attempt ${i}`);
    if (guess == answer) {
      alert("You've guessed right");
      break;
    } else if (guess < answer) {
      alert(`The Number is Higher`);
      i++;
    } else if (guess > answer) {
      alert(`the Number is Lower`);
      i++;
    }
    if (i == 7) {
      alert(`You Failed! The Number was ${answer}`);
      break;
    }
  }
};
let playAgain = () => {
  let choice = prompt(`Would you like to play again Yes or No?`);
  if (choice == "yes") {
    return true;
  } else if (choice == "no") {
    return false;
  }
};

let guessTheNumber = () => {
  attempts(); //to recall the function
  if (playAgain() == true) {
    guessTheNumber(); //to recall the game
  } else {
    alert("Thank you for playing");
  }
};

guessTheNumber();
