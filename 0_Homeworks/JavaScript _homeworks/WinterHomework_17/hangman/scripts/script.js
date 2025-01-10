// Hangman parts in the correct order
let parts = [
  "base",
  "pole",
  "top-beam",
  "rope",
  "head",
  "body",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];
let hangmanStep = 0;

function drawHangman() {
  if (hangmanStep < parts.length) {
    document.querySelector(`.${parts[hangmanStep]}`).style.display = "block";
    hangmanStep++;
  } else {
    alert("Hangman complete!");
  }
}

var letters = document.querySelector(".buttons");

letters.addEventListener("click", function (event) {
  //   console.log(event.target.innerText);
});
