// Task 00
let variable = 7;
let variableB = 8;
let variableC = variable + variableB;

console.log("VariableC = ", variableC);
console.log("=========\n");

//Task 01
let numba = 22;
let logical = true;
let text = "Some text";

console.log(`${typeof numba} \n ${typeof logical} \n ${typeof text} \n`);
console.log("=========\n");

// Task 02

let number1 = 22;
let number2 = 13;

if (number1 > number2) {
  console.log(`Number 1 is bigger: ${number1}`);
} else {
  console.log(`Number 2 is bigger: ${number2}`);
}
console.log("=========\n");

// Task 03
let number3 = 69;

if (number3 >= 100) {
  console.log("The number is cool \n");
} else console.log("You chose a number smaller than 100");

console.log("=========\n");

// Task 04
function showString(arg) {
  return `The given argument was: ${arg}, Ok?`;
}

console.log(showString("Is it okay to be "));
console.log("=========\n");

// Task 05

function carDescribe(producer, model, horsepower = "N/A", color = "N/A") {
  return `The vehicle of choice is by ${producer}, model ${model}, with ${horsepower} horsepower and ${color} color`;
}

console.log(carDescribe("Ford", "Mustang", 480));
console.log("=========\n");

// Task 06

function checkNumber(number) {
  if (number % 2 === 0) {
    return `The number: ${number} is even`;
  } else if (number % 2 === 1) {
    return `The number: ${number} is odd`;
  }
}

console.log(checkNumber(4));
console.log(checkNumber(7));
console.log("=========\n");

// Task 07

function euroConvert(denari) {
  return denari / 61.5;
}

console.log(`You converted ${euroConvert(1200).toFixed(2)} euros`);
console.log("=========\n");

// Task 08

let day = "Wednesday";

function checkSEDC(day) {
  if (day === "Monday" || day === "Wednesday" || day === "Friday") {
    return `I am in SEDC`;
  } else {
    return `I am free`;
  }
}

console.log(checkSEDC(day));
console.log("=========\n");

// Task 09

let numbers = [22, 13, 24, 8, 19];
let names = ["Milan", "Rade", "Martin", "Trajan", "Filip"];

console.log(numbers[0]);
console.log(names[0]);
console.log("=========\n");

console.log("Numbers array: ");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("Names array: ");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("=========\n");

numbers[0] = 99;
names[0] = "Clifford";

numbers[100] = 350;

console.log(`Numbers length = ${numbers.length}`);
console.log("=========\n");

console.log(`99th element of numbers is: ${numbers[99]}`);
console.log("=========\n");

let pushArray = [1, 2, 3, 4, 5, 6];
pushArray.push(22);

console.log(pushArray);
console.log("=========\n");

pushArray.pop();
console.log(pushArray);
console.log("=========\n");

// UNDEFINED

// Task 10

for (let i = 1; i <= 193; i++) {
  if (i % 2 === 0) {
    continue;
  } else console.log(i);
}
console.log("=========\n");

// Task 11

let sumArray = [22, 33, 44, 66, 77, 88, 99];
let sum = 0;

for (let num of sumArray) {
  sum += num;
}

console.log(`The sum of all elements is ${sum}`);
console.log("=========\n");

// Task 12

function checkAVG(array) {
  let sum = 0;
  let avg = 0;
  for (let number of array) {
    sum += number;
  }
  avg = sum / array.length;
  return avg;
}
let arrayAVG = [1, 2, 3, 4, 5, 6, 7];
console.log(checkAVG(arrayAVG));
console.log("=========\n");

// Task 13

function countEven(array) {
  let counter = 0;
  for (let number in array) {
    if (number % 2 === 0) {
      counter++;
    } else continue;
  }
  return counter;
}

let arrayEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`There are ${countEven(arrayEven)} even numbers`);
console.log("=========\n");

// Task 14

function checkValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i], value);
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

let arrayCheck = [1, 2, 3, 4, 5, 6];
let value = 5;
console.log(checkValue(arrayCheck, value));
console.log("=========\n");

// Task 15

function checkLengths(names) {
  let lengthArray = [];
  for (let name of names) {
    // console.log(name.length);
    lengthArray.push(name.length);
  }
  return lengthArray;
}
let namesLength = ["Milan", "Rade", "Martin", "Trajan", "Filip"];

console.log(checkLengths(namesLength));
console.log("=========\n");

// Task 16

function dividedNumbers(n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
      newArray.push(i);
    } else continue;
  }
  return newArray;
}

console.log(dividedNumbers(133));
console.log("=========\n");

// Task 17

function guessPIN(pin1, pin2) {
  let guessedCount = 0;
  for (let i = 0; i < 4; i++) {
    if (pin1 % 10 === pin2 % 10) {
      guessedCount++;
      pin1 = parseInt(pin1 / 10);
      pin2 = parseInt(pin2 / 10);
      console.log(`Guessed Count = ${guessedCount} \n`);
    }
  }
  if (guessedCount === 4) {
    return `That was correct`;
  } else {
    return `Sorry that was wrong`;
  }
}

pin1 = 2421;
pin2 = 2321;

console.log(guessPIN(pin1, pin2));
console.log("=========\n");

// Task 18

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`I = ${i}`);
    // debugger;
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`Fizz Buzz \n`);
    } else if (i % 5 === 0) {
      console.log(`Buzz \n`);
    } else if (i % 3 === 0) {
      console.log(`Fizz \n`);
    }
  }
}
printNumbers(100);
console.log("=========\n");
