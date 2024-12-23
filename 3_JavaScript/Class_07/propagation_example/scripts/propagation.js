let mainDiv = document.getElementById("name");

function createButton() {
  let html = `<button id="btn">Click me</button>`;
  mainDiv.innerHTML += html;
}

//* WE CANNOT ADD EVENT LISTENER ON ELEMENT THAT IS NOT IN THE HTML
// document.getElementById("btn").addEventListener("click", function (e) {
//   console.log("The button is clicked");
// });

document.getElementById("btn1").addEventListener("click", function (e) {
  createButton();
});

mainDiv.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log(e);
  console.log("Btn is clicked");
});
