let name = "Milan"; //* Global scope variable

function printMessage() {
  let message = "Hello world"; //* Local scope variable
  console.log("Hello world from " + name);
}

printMessage();

//* GLOBAL SCOPE
let globalScopeVariable = 0;

function localScope() {
  if (true) {
    //* FIRST IF SCOPE
    let ifVariable = 3;

    if (true) {
      //* SECONF IF SCOPE
      let secondIfVariable = 4;
    }
  }
}

// let message = "Welcome message";
// function welcomeMessage(message) {
//   let message = ""; // cannot re-declare an already declared variable
// }

function toFahrenheit(celsius) {
  let result = celsius * (9 / 5) + 32;
  return result;
}

function toCelsius(fahrenheit) {
  let result = ((fahrenheit - 32) * 5) / 9;
  return result;
}

console.log(toFahrenheit(30));
console.log(toCelsius(250));

function calcFromInput() {
  let number = prompt("Enter a number for conversion");
  let symbol = prompt("Enter the symbol to which you want to convert");

  if (symbol === "c") {
    return toCelsius(number);
  } else if (symbol === "f") {
    return toFahrenheit(number);
  } else return "Wrong symbol input";
}

console.log(calcFromInput());

function calculateAge(birthYear) {
  let date = new Date();
  let currentYear = date.getFullYear();
  let result = currentYear - birthYear;

  console.log(`You are ${result} years old`);
}

//TODO: Re-create this function with more precision

calculateAge(1994);
calculateAge(1951);
calculateAge(1972);
