// Grabbing the element using its ID
// const grabTaskInput = document.querySelector("#taskInput");
// console.log(grabTaskInput);
// const grabDateInput = document.querySelector("#dateInput");
// console.log(grabDateInput);
// const grabSubmitBtn = document.querySelector("#submit");
// console.log(grabSubmitBtn);
// // Add a click event listener to the submit button
// grabSubmitBtn.addEventListener("click", (e) => {
//   e.preventDefault(); // Prevent the default form submission behavior
//   // Log the values of the task input and date input
//   console.log(grabTaskInput.value);
//   console.log(grabDateInput.value);
//   // Get the paragraph element using its class
//   const paragraphElement = document.querySelector(".paragraph");
//   console.log(paragraphElement);
//   // Update the content of the paragraph with the task name and due date
//   paragraphElement.innerHTML = `Task Name: ${grabTaskInput.value} : Task due date ${grabDateInput.value}`;
//   // Clear the values of the task input and date input
//   grabTaskInput.value = "";
//   grabDateInput.value = ""; // constructor function
//   function taskList(taskInput, dateInput) {
//     this.taskList = taskInput;
//     this.taskDate = dateInput;
//   }
// });
// task name
const grabTaskInput = document.getElementById("taskInput");
console.log(grabTaskInput);

// task date
const grabTaskDateInput = document.getElementById("taskDateInput");
console.log(grabTaskDateInput);

// The submit button
const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);
const grabTest = document.getElementById("test");
console.log(grabTest);

grabSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // to prevent it from refreshing the page
  console.log(grabTaskInput.value);
  console.log(grabTaskDateInput.value);

  // When you click the like button, the first name paragraph will appear
  // task: task date:
  // const paragraphElement = document.querySelector(".paragraph");
  // console.log(paragraphElement);
  const paragraphElement = document.createElement("li");
  //li stands for list item, which creates a list of items
  //which is a built in element for html

  paragraphElement.innerHTML = `Task: ${grabTaskInput.value} Task Date: ${grabTaskDateInput.value}`;

  console.log(
    `Task: ${grabTaskInput.value} Task Date: ${grabTaskDateInput.value}`
  );
  test.appendChild(paragraphElement); //appendchild adds the submitted item into the test list
  // clear value
  grabTaskInput.value = "";
  grabTaskDateInput.value = "";
});
