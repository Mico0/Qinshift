let btn = document.querySelectorAll("#btn");
console.log(btn);

btn[0].onclick = function () {
  console.log(
    "We are Anonymous, we are many. \nWe do not forgive, we do not forget."
  );
};

btn[0].onchange = function () {
  console.log("Test");
};

function greet() {
  console.log("Hello");
  return "Milan";
}

let mainBtn = document.getElementById("mainBtn");

//! mainBtn.onclick = greet();
//! This calls the greet function immediately and assigns the result of the function to mainBtn.onclick.
//! If greet returns a value (e.g., a string, number, or undefined), that value will be assigned to mainBtn.onclick.
//! This does not attach the greet function as an event handler.

mainBtn.onclick = greet;

//! This assigns a reference to the greet function to mainBtn.onclick, without calling it immediately.
//! The greet function is executed only when the button is clicked.

let body = document.getElementsByTagName("body");

body[0].onmousemove = function () {
  console.log("moving");
};

let mainDiv = document.getElementById("main");

function changeBgColorWhenIn() {
  mainDiv.style.backgroundColor = "goldenrod";
}

function changeBGColorWhenOut() {
  mainDiv.style.backgroundColor = "crimson";
}

//* Using reference to a function
mainDiv.onmouseleave = changeBGColorWhenOut;
mainDiv.onmouseenter = changeBgColorWhenIn;

//* Declaring a function directly in the event handler
mainDiv.ondblclick = function () {
  mainDiv.style.display = "none";
};
