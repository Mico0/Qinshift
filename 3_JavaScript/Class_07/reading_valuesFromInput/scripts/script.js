//* reading the value through the element

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let paragraph = document.getElementById("par");

btn.addEventListener("click", function () {
  paragraph.style.backgroundColor = "crimson";
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "25px";
});

input.addEventListener("keypress", function (e) {
  //   console.log(e);
  if (e.key === "Enter") {
    console.log(e.target.value);
    e.target.value = "";
  }
});
