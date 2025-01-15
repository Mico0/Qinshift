function Todo(id, title, description) {
  this.id = id;
  this.title = title;
  this.description = description;

  this.isComplete = false;
}

let todoIdCounter = 1;
let isDisplayed = false;
let form = document.getElementById("add-todo-form");

function createTodo(title, description) {
  let todo = new Todo(todoIdCounter, title, description);
  todoIdCounter++;
  return todo;
}

function resetValues(parentElement) {
  let inputs = parentElement.getElementsByTagName("input");
  for (let input of inputs) {
    input.value = "";
  }
}

function getValuesFromInputs(parentElement) {
  let inputs = form.getElementsByTagName("input");
  let inputValues = {};
  for (let input of inputs) {
    inputValues[input.name] = input.value;
  }

  return inputValues;
}

document.querySelector("#add-todo").addEventListener("click", function () {
  if (!isDisplayed) {
    form.style.display = "block";
    isDisplayed = true;
  } else {
    form.style.display = "none";
    isDisplayed = false;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  resetValues(form);
});

document.getElementById("save-todo").addEventListener("click", function () {
  let inputValues = getValuesFromInputs(form);
  let todo = createTodo(inputValues.title, inputValues.description);
  console.log(todo);
  resetValues(form);
});
