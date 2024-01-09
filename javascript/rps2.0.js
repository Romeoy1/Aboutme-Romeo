// selecting the id from the html
//we used dom manipulation to grab each element we needed from the page
const userChoice = document.querySelector("select");
// document is refers to the html page, and querySelector grabs and element from the page
//the string inside query selector is defined by if we're grabbing an id, class, or a element
// . for class , # for id, nothing for element
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
const pResult = document.querySelector("#pResult");
const cResult = document.querySelector("#cResult");
const result = document.querySelector("#result");
const submit = document.querySelector("#submit");
// player and cpu choices and results
let userPoints = 0;
let cpuPoints = 0;
let choices = ["rock", "paper", "scissor"];
let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
// to pop up when we click submit
submit.addEventListener("click", () => {
  // addeventlistener connect to an element and listens for an event, we specify a click event
  // so that it knows to listen for a click, and add a function to run each time the button is clicked
  cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(cpuChoice);

  //to show the results
  // i'm saying the element at element .value because thats how we can we grab a sceified value
  //i.e. i choose rock so the value of the element becomes rocks
  if (userChoice.value == cpuChoice) {
    //innerHTML connects to an element and allow us to read or edit the value (ti's text) in a element
    pScore.innerHTML = `Player: ${userPoints}`;
    cScore.innerHTML = `CPU: ${cpuPoints}`;
    pResult.innerHTML = `Player ${userChoice.value}`;
    cResult.innerHTML = `CPU ${cpuChoice}`;
    result.innerHTML = `Tie`;
  } else if (
    //the matchups
    (userChoice.value == "rock" && cpuChoice == "paper") || //the "or"
    (userChoice.value == "paper" && cpuChoice == "scissors") ||
    (userChoice.value == "scissors" && cpuChoice == "rock")
  ) {
    cpuPoints++; //when the cpu wins
    pScore.innerHTML = `Player: ${userPoints}`;
    cScore.innerHTML = `CPU: ${cpuPoints}`;
    pResult.innerHTML = `Player ${userChoice.value}`;
    cResult.innerHTML = `CPU ${cpuChoice}`;
    result.innerHTML = `You Lose`;
  } else {
    userPoints++; // when the player wins
    pScore.innerHTML = `Player: ${userPoints}`;
    cScore.innerHTML = `CPU: ${cpuPoints}`;
    pResult.innerHTML = `Player ${userChoice.value}`;
    cResult.innerHTML = `CPU ${cpuChoice}`;
    result.innerHTML = `You Win`;
  }
});

console.log(userChoice);
