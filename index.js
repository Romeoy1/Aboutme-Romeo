// /// VARIABLES - containers for data used for later

// /// let - are mutable / change
/// box scope
// let number = 15;

// number = 10;

// console.log(number);

// /// const - immutable/cannot change
/// box scope
// const name = "Romeo";

// /// name = "Mai";

// /// var - just like let
// /// arent going to use
/// is gobal scope

// /// variable declarations

// var number2 = 0;

// number2 = 10;

// /// DATA TYPES

// ///  Number/Interger

// let x = 2;

// let y = 2.5;

// let z = x + y;

// let b = 1000000;

// let xxxxxx = 10;

// console.log(2 ** 4);

// /// String sequnce of characters

// /// ' ', " ", ` `

// const name2 = "goodmorning";

// /// concatenation

// let sentence = "hi";
// let sentence2 = "bye";
// let sentence3 = sentence + " " + sentence2;
// /// ${} - tempplate literal
// let sentence4 = `Hi my name is Romeo. ${sentence2}`;
// console.log(sentence4);

// let o = 200;

// let s = `${o}`;

// let num = "20,000";

// let num2 = "20";

// /// let num = '20' always going to be a string

// console.log(num + num2);

// const yummyFood3 = 10;

// /// console.log(numb3); prints to the console

// /// Booleans

// /// Truthy - anything with value
// /// 1
// /// 'String'
// /// true
// /// Falsy - undefined; no value
// /// 0
// /// ''
// /// false
// /// undefined
// /// null

// console.log(Boolean("1000"));

// let example = "Romo";

// let sentence5 = `Hi my name is ${example} and i am ${number}`;
// console.log(sentence5);

// /// what is an array?

// const emptyArr = [];
// console.log(emptyArr);
// const lengthOfEmptyArray = emptyArr.length;
// console.log(lengthOfEmptyArray);

// const mixArr = [1, "Collin"];
// console.log(mixArr);

// const nameArr = ["Lucycan", "Collin", "Mark"];
// console.log(nameArr);
// const lengthOfNameArray = nameArr.length;
// console.log(lengthOfNameArray);

// const Hello = `Hi my name is ${nameArr[1]}`;
// console.log(Hello);

// console.log(nameArr[2]);

// const push = nameArr.push("Cortez");
// console.log(push);
// console.log(nameArr.push("Mai"));
// nameArr.push("Jet");
// console.log(nameArr);

// console.log(nameArr.pop());

// /// how to index the last element
// const A = ["aa", "bb", 12, "kk", 2];
// const B = A[A.length - 1];
// console.log(B);
// ///  pass by value
// let arr = [1, 2, 3, 4, 5, 6];
// let LastItem = arr.slice(-1);
// let num5 = LastItem.slice(0);
// /// passing by renfrences
// arr[arr.lenght - 1];
// console.log(arr);

// const arr1 = [5, 6, 2, 9];
// arr1[1] = 10;
// arr1.push(90);
// arr1.pop();

// console.log(arr1);

// console.log(arr1[Math.floor(Math.random() * arr1.length)]);

// /// how to change a element
// let arr2 = [2, 2, 4];
// arr2[1] = 5;
// console.log(arr2);

// let len = arr2.length;
// arr2[len - 1] = 10;
// console.log(arr2);

// let arr3 = [2, 4, 5, 6, 2, 4];

// let randomNumber = Math.floor(Math.random() * arr3.length);
// console.log(arr3[randomNumber]);

// /// FOR LOOPS
// /// it repeats a task or a code a certain number of times based
// /// on a condition
// /// split() - splits a string by the specified character
// /// join() - joins array element between a specified character
// let str = "Raoamaeao";
// console.log(str.split("a"));

// let arr4 = ["R", "o", "m", "e", "o"];
// console.log(arr4.join("o"));

// ///  traditional //
// /// 1. intializer 2. condition 3. iterator
// /// reads + as thinking another number where
// /// ++ is going to be a plus one
// for (let i = 0; i < arr4.length; i++) {
//   console.log(i);
// }

// for (let i = 0; i < arr4.length; i++) {
//   console.log(arr[i]);
// }

// /// for loop
// for (char of arr4) {
//   console.log(char);
// }

// /// for loops for strings
// let string = "MaiHli";
// for (char of string) {
//   console.log(char);
// }
// /// while loop

// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }

// let word = "romeo";
// let attempts = 0;
// let arr5 = [];
// let characters = "abcdefghijklnmopqrstuvwxyz";
// let charArray = characters.split("");
// console.log(charArray);

// while (arr5.join(``) != word) {
//   arr5 = [];
//   for (char of word) {
//     arr5.push(charArray[Math.floor(Math.random() * charArray.length)]);
//   }
//   console.log(arr5.join(""));
//   attempts++;
// }
// console.log(`Number of attempts: ${attempts}`);

// let k = [1, 2, 3, 4, 5];
// while (k < 5) {
//   console.log(k);
//   k++;
// }

// let f = 0;
// const HW = ["a", 4, "r", 1, "w"];
// while (f < HW.length) {
//   console.log(HW[f]);
//   f++;
// }
// /// logical operator
// ///  ! = not , > greater, < less,
// /// loose equal == don't account for data type,
// /// strict equal === account for data type
// ///
// let input = prompt("What is your name");
// let input2 = prompt("What is your age?");
// console.log(input);
// alert(
//   "Hi my name is" +
//     " " +
//     input +
//     " " +
//     " and I am" +
//     " " +
//     input2 +
//     " " +
//     "years old"
// );
// /// another way is alert(`Hi my name is ${input} and i am ${input2} years old`)

// let guess = prompt("Guess a number between 1-15");
// while (guess != "15") {
//   guess = prompt("HAHA YOU'RE WRONG! TRY AGAIN!");
// }
// alert("You guessed correctly!");

// /// sometimes we want to just check if a variable has a value
// if (f) {
//   console.log("this code block will execute");
// } else {
//   console.log("this is the false block");
// }
// if (j) {
//   ///if j is truthy
//   console.log(j === "hi");
// }

// if (x === "hello i.c stars") {
//   console.log("this is true"); ///this will not run if false
// } else {
//   console.log("this is false"); /// this is where the false block is
// }

// let ranNum = Math.floor(Math.random() * 3);
// console.log(ranNum);

// if (ranNum === 0) {
//   console.log("Zero is your random Number");
//   /// something happens here
// } else if (ranNum === 1) {
//   console.log("One is your random Number");
//   /// something happens here
// } else if (ranNum === 2) {
//   console.log("Two is your random Number");
//   /// something happens here
// }

// const paragraph = document.querySelector(".Troll");
// console.log(paragraph);
// if (paragraph.classList[0] == "paragraph") {
//   paragraph.innerHTML = "Rick Rolled";
// }

// /// logical and operator

// if (ranNum === 0 && str) {
//   console.log(
//     "both these expressions have to be truthy for this code block to run"
//   );
// } else {
//   console.log("one or both expressions are false");
// }

// /// logical or operator
// if (ranNum === 0 || o) {
//   /// can be the same
//   console.log("Only one of these needs to be true for this truth block to run");
// } else {
//   console.log("everything else here needs to be false");
// }
// ///Block scope
// if (ranNum === 0) {
//   let staff0 = "Lucycan";
//   console.log(staff0);
// } else if (ranNum === 1) {
//   let staff1 = "Collin"; /// wont show up because its not logged
// } else if (ranNum === 2) {
//   let staff2 = "Mark";
//   console.log(staff2);
// }
// ///0 and 2 is expected to be logged because it was logged

// yy === 2 ? console.log("even") : console.log("odd");

// debugger;
// let dudes = ["Romeo", "Jet", "Peter", "Uswin", "Alex"];
// console.log(dudes);
// let ii = "Hello";
// if (1 === "Hello") console.log(dudes);
// for (let ii = 0; ii < dudes.length; ii++) {
//   if (dudes[ii] === "Jet") {
//     console.log(`Hello ${dudes[ii]}. How are you.`);
//     break;
//   } else {
//     console.log(`${dudes[ii]}`);
//   }
// }
// console.log(dudes[2]);

/// userinput, choices array, computerInput

// / a reuseable code
// function addNumbers(a,b){ // input
// return a + b //output
// }
// addNumbers(2,3)
// let result = addNumbers(5,5)
// console.log(addNumbers(5,10))
// console.log(result)
// function addString(str1, str2) {
//   return str1 + str2;
// }
// let combination = addString("Romeo", "Yang");
// console.log(combination);

// let name = function (a, b) {
//   ///expression function

//   name(1, 5);
// };
// function name2() {
//   ///regular function
// }
// let name3 = (a, b) => {
//   return a + b;
// }; /// Arrow function
// function loopArray(arr) {
//   for (char of arr) {
//     console.log(char);
//   }
// }
// let nums = [1, 2, 3, 4];
// let names = ["Romeo", "Yang", "Mai", "Hli"];
// loopArray(nums);
// loopArray(names);

// let ventingMachine = (money, item) => {
//   let snacks = [
//     "Pepsi",
//     "Hershey",
//     "Snicker",
//     "Reeses",
//     "Cheetose",
//     "Coke",
//     "Water",
//   ];
//   if (money === "$2.00") {
//     for (food of snacks) {
//       if (item === food) {
//         return `You picked ${food}`;
//       }
//     }
//     return `${item} Doesn't Exist`;
//   }
// };let
// console.log(ventingMachine("$2.00", "Hershey"));
// function playRockPaperScissors() {
//   let userChoice = prompt("Rock, paper, or scissors");
//   let validChoices = ["rock", "paper", "scissors"];
//   if (!validChoices.includes(userChoice)) alert("Wrong input. Try again");
//   let botChoices = ["rock", "paper", "scissors"];
//   let botChoice = botChoices[Math.floor(Math.random() * 3)];
//   console.log(`You Chose ${userChoice}`);
//   console.log(`Bot Chose ${botChoice}`);

//   if (userChoice === botChoice) {
//     return "Tie";
//   } else if (
//     (userChoice === "rock" && botChoice === "scissors") ||
//     (userChoice === "paper" && botChoice === "rock") ||
//     (userChoice === "scissors" && botChoice === "paper")
//   ) {
//     return "You won";
//   } else {
//     return "Bot has won";
//   }
// }
// let result = playRockPaperScissors();
// console.log(result);
// let a = " ";
// let name = "ME";
// let x = name.length - 1;
// while (x > 0) {
//   a.push(name[x]);
//   x--;
// }
// document.addEventListener("click", (e) => {
//   // what react reads
//   console.log("You Clicked");
// });

// function fncClicked() {
//   console.log("This function was called down there");
// }
// document.addEventListener("click", (e) => {
//   console.log(e);
//   console.log("Like!");
// });
// document.addEventListener("click", (p) => {
//   console.log(p);
//   console.log("You have clicked anywhere in the document");
// });
// //first name
// const grabfirstNameInput = document.getElementById("firstNameInput");
// console.log(grabFirstNameInput);
// //last name
// const grablastNameInput = document.getElementById("lastNameInput");
// console.log(grabLastNameInput);
// //Birthday
// const grabdateInput = document.getElementById("dateInput");
// console.log(grabDateInput);
// //The like button
// const grabsubmitBtn = document.getElementById("submitBtn");
// console.log(grabsubmitBtn);
// // document.body.addEventListener("click", =>{
// //     console.log()
// // })
// grabsubmitBtn.addEventListener("click", (e) => {
//   e.preventDefault(); //to prevent it from refreshing the page
//   console.log(grabFirstNameInput.value);
//   console.log(grabLastNameInput.value);
//   console.log(grabDateInput.value);
//   // when wee click the like button the first name the paragraph will apprear
//   // it will say "Lucy Ly, your birthday is 01/05/1979. Thank you for liking!"
//   const paragraphElement = document.querySelector(".paragraph");
//   console.log(paragraphElement);
//   paragraphElement.innerHTML = `${grabFirstNameInput} ${grabLastNameInput} you're birthday is ${grabDateInput}. Thank you for liking! `;
//   console.log(
//     `${grabFirstNameInput} ${grabLastNameInput} you're birthday is ${grabDateInput}. Thank you for liking! `
//   );
// });
// first name
const grabRatingInput = document.getElementById("ratingInput");
console.log(grabRatingInput);
// The like button
const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);
grabSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // to prevent it from refreshing the page
  console.log(grabRatingInput.value);

  function updateScaleValue() {
    // Get the range input element with the id "scale"
    const scaleInput = document.getElementById("scale");

    // Get the span element with the id "scaleValue" to display the current value
    const scaleValue = document.getElementById("scaleValue");

    // Update the text content of the span to the current value of the range input
    scaleValue.textContent = scaleInput.value;
  }
  // When you click the like button, the first name paragraph will appear
  const paragraphElement = document.querySelector(".paragraph");
  console.log(paragraphElement);

  paragraphElement.innerHTML = `You've rated my page ${grabRatingInput.value}. Thank you so much!`;

  console.log(
    `You've rated my page ${grabRatingInput.value}. Thank you so much!`
  );
  // clear values
  grabRatingInput.value = "";
  // Change the color of the label for the first name
  const grabFirstNameLabel = document.getElementById("firstNameLabel");
  grabFirstNameLabel.style.color = "red";
  const x = document.createElement("p");
  Console.log(x);
});
