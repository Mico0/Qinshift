let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let counter = 0;

while (counter < days.length) {
  console.log(days[counter] + ", ");
  counter++;
}

console.log("We outta here!");

// let numberOfValues = 10;
// let j = 0;
// let array = [];
// while (j < numberOfValues) {
//   let input = prompt("Enter the array value");
//   let parsedInput = parseInt(input);
//   array.push(parsedInput);
//   j++;
// }
// console.log(array);
// console.log("We out once more");

// counter = 0;
// let max = 0;
// while (counter < array.length) {
//   console.log(array[counter]);
//   counter++;
// }
let max = 151;
let count = 101;
let result = 0;
while (count < max) {
  console.log(`Number ${count} squared = ${Math.pow(count, 2)}`);
  result += Math.pow(count, 2);
  count++;
}

console.log(`Sum of all squares = ${result}`);

let prompted = prompt("Enter a number");
let parsedPrompt = parseInt(prompted);
let ct = 0;
let arrayDigits = [];
let digit = 0;
while (digit > 0) {
  digit = parsedPrompt % 10;
  arrayDigits.push(digit);
  parsedPrompt /= 10;
}

for (let i = 0; i < arrayDigits.length; i++) {
  console.log(arrayDigits[i]);
}
