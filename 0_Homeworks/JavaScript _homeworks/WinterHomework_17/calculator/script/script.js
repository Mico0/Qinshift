let currentInput = "";
let previousInput = "";
let operator = null;
let screen = document.getElementById("screen");

document
  .querySelector("#main_container")
  .addEventListener("click", function (event) {
    let button = event.target;
    console.log(button);

    if (button.classList.contains("digit")) {
      handleNumber(button.textContent);
    } else if (button.classList.contains("operator")) {
      handleOperator(button.textContent);
    } else if (button.id === "equals") {
      calculate();
    } else if (button.id === "reset") {
      clearScreen();
    } else if (button.classList.contains("decimal")) {
      handleDecimal();
    } else if (button.id === "backspace") {
      handleBackspace();
    }
  });

function handleNumber(number) {
  if (currentInput === "0" || currentInput === "Error") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateScreen(currentInput);
}

function handleDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
  }
  updateScreen(currentInput);
}

function handleOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  if (currentInput === "" || previousInput === "" || !operator) return;

  let num1 = parseFloat(previousInput);
  let num2 = parseFloat(currentInput);

  if (operator === "÷" && num2 === 0) {
    currentInput = "Error";
    previousInput = "";
    operator = null;
  } else {
    let result = 0;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "÷":
        result = num1 / num2;
        break;
    }
    currentInput = result.toString();
    previousInput = "";
    operator = null;

    if (currentInput.length > 12) {
      currentInput = "Error";
    }
  }
  updateScreen(currentInput);
}

function handleBackspace() {
  if (currentInput) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = 0;
  }
  updateScreen(currentInput);
}

function clearScreen() {
  currentInput = "0";
  previousInput = "";
  operator = null;
  updateScreen(currentInput);
}

function updateScreen(value) {
  screen.textContent = value;
}
