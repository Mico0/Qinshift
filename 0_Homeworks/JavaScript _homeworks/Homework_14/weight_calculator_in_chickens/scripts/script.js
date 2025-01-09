let weight = parseInt(prompt("Enter your weight"));
// console.log(weight);
function weightInChickens(weight) {
  return weight / 0.5;
}

let result = document.querySelector("#result");
result.innerText = `Your weight in chickens is ${weightInChickens(weight)}`;
