// VARIABLES - containers for data used for later

//let - are mutable / change
let number = 15;

number = 10;

console.log(number);

//const - immutable/connot change
const name = "Romeo";

// name = "Mai";

//var - just like let
// arent going to use

// variable declarations

var number2 = 0;

number2 = 10;

// DATA TYPES

//  Number/Interger

let x = 2;

let y = 2.5;

let z = x + y;

let b = 1000000;

let xxxxxx = 10;

console.log(2 ** 4);

// String sequnce of characters

// ' ', " ", ` `

const name2 = "goodmorning";

// concatenation

let sentence = "hi";
let sentence2 = "bye";
let sentence3 = sentence + " " + sentence2;
// ${} - tempplate literal
let sentence4 = `Hi my name is Romeo. ${sentence2}`;
console.log(sentence4);

let o = 200;

let s = `${o}`;

let num = "20,000";

let num2 = "20";

// let num = '20' always going to be a string

console.log(num + num2);

const yummyFood3 = 10;

// console.log(numb3); prints to the console

// Booleans

// Truthy - anything with value
// 1
// 'String'
// true
// Falsy - undefined; no value
//0
// ''
// false
// undefined
// null

console.log(Boolean("1000"));

let example = "Romo";

let sentence5 = `Hi my name is ${example} and i am ${number}`;
console.log(sentence5);

// what is an array?

const emptyArr = [];
console.log(emptyArr);
const lengthOfEmptyArray = emptyArr.length;
console.log(lengthOfEmptyArray);

const mixArr = [1, "Collin"];
console.log(mixArr);

const nameArr = ["Lucycan", "Collin", "Mark"];
console.log(nameArr);
const lengthOfNameArray = nameArr.length;
console.log(lengthOfNameArray);

const Hello = `Hi my name is ${nameArr[1]}`;
console.log(Hello);

console.log(nameArr[2]);

const push = nameArr.push("Cortez");
console.log(push);
console.log(nameArr.push("Mai"));
nameArr.push("Jet");
console.log(nameArr);

console.log(nameArr.pop());

// how to index the last element
const A = ["aa", "bb", 12, "kk", 2];
const B = A[A.length - 1];
console.log(B);
//  pass by value
let arr = [1, 2, 3, 4, 5, 6];
let LastItem = arr.slice(-1);
let num5 = LastItem.slice(0);
// passing by renfrences
arr[arr.lenght - 1];
console.log(arr);

const arr1 = [5, 6, 2, 9];
arr1[1] = 10;
arr1.push(90);
arr1.pop();

console.log(arr1);

console.log(arr1[Math.floor(Math.random() * arr1.length)]);

// how to change a element
let arr2 = [2, 2, 4];
arr2[1] = 5;
console.log(arr2);

let len = arr2.length;
arr2[len - 1] = 10;
console.log(arr2);

let arr3 = [2, 4, 5, 6, 2, 4];

let randomNumber = Math.floor(Math.random() * arr3.length);
console.log(arr3[randomNumber]);

// FOR LOOPS
// it repeats a task or a code a certain number of times based
// on a condition
// split() - splits a string by the specified character
// join() - joins array element between a specified character
let str = "Raoamaeao";
console.log(str.split("a"));

let arr4 = ["R", "o", "m", "e", "o"];
console.log(arr4.join("o"));

//  traditional //
// 1. intializer 2. condition 3. iterator
// reads + as thinking another number where
// ++ is going to be a plus one
for (let i = 0; i < arr4.length; i++) {
  console.log(i);
}

for (let i = 0; i < arr4.length; i++) {
  console.log(arr[i]);
}

// for loop
for (char of arr4) {
  console.log(char);
}

// for loops for strings
let string = "MaiHli";
for (char of string) {
  console.log(char);
}
// while loop

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let word = "name";
let attempts = 0;
let arr5 = [];
let characters = "abcdefghijklnmopqrstuvwxyz";
let charArray = characters.split("");
console.log(charArray);

while (arr5.join(``) != word) {
  arr5 = [];
  for (char of word) {
    arr5.push(charArray[Math.floor(Math.random() * charArray.length)]);
  }
  console.log(arr5.join(""));
  attempts++;
}
console.log(`Number of attempts: ${attempts}`);

let k = [1, 2, 3, 4, 5];
while (k < 5) {
  console.log(k);
  k++;
}

let f = 0;
const HW = ["a", 4, "r", 1, "w"];
while (f < HW.length) {
  console.log(HW[f]);
  f++;
}
// logical operator
//  ! = not , > greater, < less,
// loose equal == don't account for data type,
// strict equal === account for data type
//
