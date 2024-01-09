const grabTaskInput = document.querySelector("taskInput");
console.log(taskInput);
const grabDateInput = document.querySelector("dateInput");
console.log(dateInput);
const submitBtn = document.querySelector("submit");
console.log(submitBtn);
grabTaskBtn = addEventListener("click", (e) => {
  e.defaultPrevented();
  console.log(taskInput.value);
  console.log(dateInput.value);
});
