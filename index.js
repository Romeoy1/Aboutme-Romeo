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
