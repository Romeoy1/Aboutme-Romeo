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
console.log(arr[playerY][playerX]);
arr[playerY][playerX] = 1;

playerY += 1; // plus 1

function render() {
  console.clear();
  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (row == playerY && column == playerX) {
        arr[row][column] = "X";
      }
      arr[row][column] = 0;
    }
  }

  console.table(arr);
}
render();
window.addEventListener("keydown", function (e) {
  //render()
  console.log(e.key);
  if (e.key == "w") {
    //going up
    playerY--;
    render();
  } else if (e.key == "a") {
    // going left
    playerX--;
    render();
  } else if (e.key == "s") {
    //going down
    playerY++;
    render();
  } else if (e.key == "d") {
    //going right
    playerX++;
    render();
  }
});
