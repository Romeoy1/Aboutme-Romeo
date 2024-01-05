// //objects

// //a container that holds unique characters and behavior
// // object specific data pertaining to an individual or item

// let names = ['Romeo', 'Yang']
// // object takes property( each property has a set of keys and vaule)
// let personOBJ = {
//     name: 'Romeo',
//     age: 21,

// }
// let northWind = {
//     categoryNames: ['Beverages', 'Poultry']

// }
// console.log(personOBJ)
// Initialize an empty array to store user information

let list = [];
let addUser = true; // Initialize a boolean variable to control the loop

// Initialize a boolean variable to control the loop
function userList(userName, password, email) {
  return {
    userName: userName,
    password: password,
    email: email,
  };
}

// Start a loop that continues until the user chooses to stop
while (addUser) {
  // Prompt the user to input a username, password, and email
  let userName = prompt("Make a username");
  let password = prompt("Make a password");
  let email = prompt("Enter your email");

  list.push(userList(userName, password, email)); // push a user object using the userList function and add it to the list array

  addUser = confirm("Do you want to add another user?"); // Ask the user if they want to add another user and update the addUser variable
}

console.table(list); // Display the list of users in a table in the console
