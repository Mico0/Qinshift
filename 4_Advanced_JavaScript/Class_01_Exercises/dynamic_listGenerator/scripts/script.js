function generateList() {
  let colorVal = document.getElementById("color").value;
  let fontSize = document.getElementById("fontSize").value;
  let items = document.getElementById("items").value;
  let splitItems = items.split(",");
  let result = document.getElementById("result");
  result.innerHTML = "";

  result.innerHTML += `<ul>`;
  for (let item of splitItems) {
    result.innerHTML += `<li style="font-size: ${fontSize}px; color: ${colorVal}">${item}</li>`;
  }
  result.innerHTML += `</ul>`;
}
let btn = document.getElementById("btn");

btn.addEventListener("click", generateList);
