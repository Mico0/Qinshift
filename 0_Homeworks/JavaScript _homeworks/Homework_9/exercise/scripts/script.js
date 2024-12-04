let input = prompt("Please enter how much money you have?");

let inputValue = parseFloat(input);

// console.log(input);
// console.log(typeof input);

// console.log("=========");

// console.log(inputValue);
// console.log(typeof inputValue);

let result = document.getElementById("result");

if (isNaN(inputValue) || inputValue < 0) {
  location.reload();
  result.innerHTML = "Please enter a valid value";
} else {
  if (inputValue <= 50) {
    result.innerHTML =
      "With less than $100, consider saving it for emergencies or buying something small like a good book or a meal.";
  } else if (inputValue > 50 && inputValue <= 300) {
    result.innerHTML =
      "You have a decent amount! Maybe treat yourself to a nice gadget, a weekend trip, or start a small investment.";
  } else if (inputValue <= 500 || inputValue > 500) {
    result.innerHTML =
      "Wow, that's a great amount! You could plan a vacation, invest in stocks, or make a down payment for something substantial.";
  }
}
