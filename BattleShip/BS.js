let player1 = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 0],
];
let player2 = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 1],
];
let pr1 = prompt("choose your row");
let pc1 = prompt("choose your column");
let p1score = 0;
while (p1score < 2) {
  if (player2[p1Row][p1column] == 1) {
    alert("hit");
    p1score++;
  } else {
    alert("miss");
  }
  alert(`Current score : player1 : ${p1score}`);
  if (p1score >= 2) {
    alert("player 1 win");
    break; // means to break out the loop
  }
}
// function ship(A = 1) {
//   if ((row != 0 && column != 0)) {
//     return ;
// } else if (row = 0 && column = 0 ) {
//     return false;
//   }
// }
// function checkWinner(player1) {
//   for (let row = 0; row < 1; row++) {
//     for (let column = 0; column < 1; column++) {
//       if (ship(player1[row][column])) {
//         return "hit";
//       }
//     }
//   }
//   return "miss";
// }
// function checkWinner(player2) {
//   for (let row = 0; row < 1; row++) {
//     for (let column = 0; column < 1; column++) {
//       if (ship(player2[row][column])) {
//         return "hit";
//       }
//     }
//   }
//   return "miss";
// }
// console.log(ship(player1));
// console.log(ship(player2));
