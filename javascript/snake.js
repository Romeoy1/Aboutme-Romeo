let arr = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
//console.table(arr) //display array as a table

//event listeners

// the component listening for certain event

/* type of event
click
keydown
keyup
mouseover
mouseleave
resize
submit
*/
// window.addEventListener("click" function(){
//     console.log("Hello World")
// })
let playerX = 2; // up and down
let playerY = 3; // left and right
let score = 0; // the score
let scoreRow = 0; // how to score
let scoreColumn = 0;
//console.log(arr[playerY][playerX]);
arr[playerY][playerX] = "X"; //where x is;
arr[scoreRow][scoreColumn] = "1"; //how to score
//playerY += 1; // plus 1
coinPlacement(); // Initial coin which is the '1'placement
render();

function coinPlacement() {
  scoreRow = Math.floor(Math.random() * arr.length); // where the score is
  scoreColumn = Math.floor(Math.random() * arr.length); // says the arrays are going to be the same length
}

function render() {
  console.clear();
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (row == playerY && column == playerX) {
        //arr[row][column] = "X";

        arr[row][column] = "X"; // the player
      } else {
        arr[row][column] = 0;
      }
      if ((scoreRow = playerX)) {
      }
    }
  }
  console.table(arr);
}
render();
window.addEventListener("keydown", function (e) {
  //render()
  console.log(e.key);
  if (e.key == "w") {
    if (playerY > 0) {
      //up
      playerY--;
    } else {
      playerY = arr.length - 1; //to reset the array
    }
    render();
  } else if (e.key == "d") {
    if (playerX < arr.length) {
      //right
      playerX++;
    } else {
      playerX = 0;
    }
    render();
  } else if (e.key == "s") {
    if (playerY > arr.length - 1) {
      //up
      playerY++;
    } else {
      playerY = 0;
    }
    render();
  } else if (e.key == "a") {
    if (playerX > 0) {
      //left
      playerX--;
    } else {
      playerX = arr.length - 1;
    }
    render();
  }

  // to check if 'X' collected the '1' to score
  if (playerY === scoreRow && playerX === scoreColumn) {
    score++;
    scorePlacement(); // calling the function to randomly place the coin in a new spot after scoring a point
  }
  console.table("Score:", score); //logging the score
});
