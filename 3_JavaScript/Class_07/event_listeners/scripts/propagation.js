let mainDiv = document.getElementById("mainDiv");
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");

mainDiv.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Main div click");
});

//* the propagation executes the event listeners only of the parent elements

btn1.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Button 1 is clicked");
});

btn2.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Button 2 is clicked");
});

//* Since javascript does not know about the dynamically added elements and we cannot add event listeners to them
//* We use this concept on the parent element so that it listens for all elements added in it, in this way we can add event listeners

//* CAPTURING

// document.getElementById("black").addEventListener(
//   "click",
//   function (e) {
//     console.log("Black div is called");
//   },
//   true
// );
// document.getElementById("red").addEventListener(
//   "click",
//   function (e) {
//     console.log("Red div is called");
//   },
//   true
// );
// document.getElementById("yellow").addEventListener(
//   "click",
//   function (e) {
//     console.log("Yellow div is called");
//   },
//   true
// );
// document.getElementById("blue").addEventListener(
//   "click",
//   function (e) {
//     console.log("Blue div is called");
//   },
//   true
// );
//* Capturing must be specified with the third parameter

//* BUBBLING

document.getElementById("black").addEventListener("click", function (e) {
  console.log("Black div is called");
});
document.getElementById("red").addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Red div is called");
});
document.getElementById("yellow").addEventListener("click", function (e) {
  console.log("Yellow div is called");
});
document.getElementById("blue").addEventListener("click", function (e) {
  console.log("Blue div is called");
});

//* with event.stopPropagation() we stop the bubbling on the listener where its called it will call its child elements though
