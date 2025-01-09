let number; //* In this case number is undefined

console.log("Number 1 is: " + number);

number = 5;

console.log("Number 2 is: " + number);

number = 10;

console.log("Number 3 is: " + number);

console.log("Type of number " + typeof number);

let firstName = "Milan";

console.log(typeof firstName);

console.log("Your name is: " + firstName);

let isValid = true;

console.log("Is it boolean? It's " + isValid);

let undefinedVariable = undefined;

let nullValue = null;

console.log("Value of nullValue: " + nullValue);
console.log("Type of null: " + typeof nullValue);

console.log(nullValue === undefinedVariable); // comparing values
console.log(nullValue == undefinedVariable);
console.log(nullValue === null);

//* Single line comment

/*
 *  Multi line commment
 */

let newLine = "This is the first line. \nThis the second line";

console.log(newLine);
