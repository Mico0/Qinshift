let element = document.getElementById("btn");

element.addEventListener("click", function () {
  console.log("hello from JS");
});

function greet() {
  console.log("Hello Again!");
}
element.addEventListener("dblclick", greet);

let input = document.getElementById("mainInput");

input.addEventListener("keypress", function (event) {
  //* assigns the {event} object in the background and we can use its properties
  console.log(event.target.value);
});

function handleClick(e) {
  console.log(e);
}

input.addEventListener("blur", handleClick);

function greetYoSelf() {
  alert("Hello Milan!");
}

function greetYoSelf2() {
  alert("Hello again Milan!");
}

let btn3 = document.getElementById("btn3");

btn3.onclick = greetYoSelf2;

let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function () {
  alert("Hello for the last time Milan");
});

//* REMOVE EVENT LISTENERS

let btnRemove = document.getElementById("btnRemove");

btnRemove.addEventListener("click", function () {
  element.removeEventListener("click", function () {
    console.log("Removed click listener");
  });
});

//! THIS WONT WORK BECAUSE WE CANNOT REMOVE ANONYMOUS FUNCTIONS / CANNOT REMOVE ANONYMOUS EVENTS

btnRemove.addEventListener("click", function () {
  element.removeEventListener("dblclick", greet);
});

//! THIS IS THE CORRECT WAY TO REMOVE EVENT LISTENERS

// function removingEventListener() {
//   console.log("Mouse is out");
//   // CODE
//   //
//   //
//   // SOME MORE CODE
//   btnRemove.removeEventListener("mouseout", removingEventListener);
// }

// btnRemove.addEventListener("mouseout", removingEventListener);

//* getting a value from input and check its length
let content = document.getElementById("content");
function checkLength(string) {
  if (string.length >= 10) {
    let text = `The length of the word is too long, ${string.length} characters`;
    content.innerHTML = `<p>${text} </p>`;
  } else content.innerHTML = "";
}

//* inline event listeners
document.getElementById("textInput").addEventListener("keydown", function (e) {
  //* getting the input value
  let value = e.target.value;
  console.log(value);
  checkLength(value);
});

//* EVENT FLOW
