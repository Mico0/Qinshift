//keyword   //name
function greetings() {
  // Code block
  console.log("greetings");
}

// Fnction Execution
// greetings();

// creating functions with arguments

function greeting(message) {
  console.log(`Greetings ${message}, from function`);
}

// greeting("Milan");

function welcomeMessage(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}

let firstName = "Milan";
let lastName = "Ognjanoski";

// welcomeMessage(firstName, lastName);

function displayMessage(name, age, message) {
  console.log(`I am ${name} and i am ${age} years old and ${message}`);
}

let name = "Milan";
let age = "30";
let message = "this is my message";

// displayMessage(name, age, message);

//* RETURNING VALUES: a function can return only one value or one collection of values

function sum(num1, num2) {
  let sum = 0;
  sum = num1 + num2;
  return sum;
}

// console.log(sum(2, 3));

function subtraction(n, y) {
  return n - y;
}
function multiplication(n, y) {
  return n * y;
}
function division(n, y) {
  if (n && y) {
    return n / y;
  } else {
    alert("Please do not use division by 0");
  }
}

// console.log("Subtraction = ", subtraction(5, 2));
// console.log("Multiplication = ", multiplication(5, 2));
// console.log("Division = ", division(6, 2));

function calculateLoan(amount, months, interest, name) {
  console.log(amount);
  console.log(months);
  console.log(interest);
  console.log(name);
}
//* Javascript allows parameter missmatch when callign a function, it will initialize the missing parameters as undefined
// calculateLoan(1, 2, 5, 7, 2);

function calculator(num, num1, operation = "+") {
  switch (operation) {
    case "+":
      return num + num1;
    case "-":
      return num - num1;
    default:
      return null;
  }
}

// console.log(calculator(2, 3, "-"));

function returnParsed(message) {
  let input = prompt(message);
  let parsedInput = parseInt(input);
  if (isNaN(parsedInput) || typeof parsedInput != "number") {
    return NaN;
  } else return parsedInput;
}

// let input = prompt("Enter a message for the prompt: ");
// console.log(returnParsed(input));

function advCalculator(n1, n2, operation) {
  switch (operation) {
    case "+":
      return sum(n1, n2);
    case "-":
      return subtraction(n1, n2);
    case "*":
      return multiplication(n1, n2);
    case "/":
      return division(n1, n2);
    default:
      return null;
  }
}

console.log(advCalculator(2, 3, "+"));
