// // let x = 0;

// // let arr = [
// //   [1, 2, 3],
// //   ["Romeo", "Jet", "ALex"],
// //   [true, false, true],
// // ];

// // for (let i = 0; i < arr.length; i++) {
// //   // for each array in the main array
// //   for (let j = 0; j < arr[i].length; j++) {
// //     // for each element in the array in the main array
// //     if (typeof arr[i][j] == "string" && j == 0) {
// //       // if that element is a string AND is at the first position
// //       for (char of arr[i][j]) {
// //         // log each character in that element to the console
// //         console.log(char);
// //       }
// //     }
// //   }
// // }

// let arr = [34, 1, 0, 7, 3, 65, 26, 7829, 23];
// for (let i = 0; i < arr.length; i++) {
//   // iterating through the array
//   for (let j = 0; j < arr.length; j++) {
//     // iterating through the array each time i increased by one (iterates 100 times)
//     if (arr[j] > arr[j + 1]) {
//       // if the element at the position j is more then the element directly ahead of it
//       let temp = arr[j]; // arr[j] now equals the element head of j
//       arr[j] = arr[j + 1]; // and the next element equals temp (which  was the first arr[j] before it was changed)
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// // if (arr[i] > arr[i + 1]) {
// //   let temp = arr[i];
// //   arr[i] = arr[i + 1];
// //   arr[i + 1] = temp;
// // }

// //make a function that takes in an array and a target number that return two numbers from the array that
// //equals the target, else, return " No number equal the target"let arr = [4,2,3]
// function twosum(x, y) {
//   for (let a = 0; a < x.length; a++) {
//     for (let b = a + 1; b < x.length; b++) {
//       if (x[a] + x[b] === y) {
//         return [x[a], x[b]];
//       }
//     }
//   }
//   return "No two numbers equal the target";
// }

// console.log(twosum([6, 2, 1, 10], 5));

// function twosum([item1], item2) {
//   if (item1 == item2) {
//     return item1;
//   }
//   if (item1 !== item2) {
//     return "No numbers can equal the target";
//   }
// }
// console.log(twosum([0], 50));

let board = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 1],
];

function threeInARow(a, b, c) {
  if (a != 0 && a == c && a == b && b == c) {
    return true;
  } else {
    return false;
  }
}

function checkWinner(board) {
  // Right
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (
        threeInARow(
          board[row][column],
          board[row][column + 1],
          board[row][column + 2]
        )
      ) {
        return "Three In a Row";
      }
    }
  }
  // up and down   for (let row = 0; row < 3; row++) {
  for (let row = 0; row < 1; row++) {
    for (let column = 0; column < 3; column++) {
      if (
        threeInARow(
          board[row][column],
          board[row + 1][column],
          board[row + 2][column]
        )
      ) {
        return "Three In a Row";
      }
    }
  }
  // Diagonal Right
  for (let row = 0; row < 1; row++) {
    for (let column = 0; column < 3; column++) {
      if (
        threeInARow(
          board[row][column],
          board[row + 1][column + 1],
          board[row + 2][column + 2]
        )
      ) {
        return "Three In a Row";
      }
    }
  }
  //   Diagonal Left
  for (let row = 0; row < 1; row++) {
    for (let column = 0; column < 3; column++) {
      if (
        threeInARow(
          board[row][column],
          board[row + 2][column - 2],
          board[row + 1][column - 1]
        )
      ) {
        return "Three In a Row";
      }
    }
  }
}
console.log(checkWinner(board));
