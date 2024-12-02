let a = 5 - "abc";
console.log("Value of a: ");
console.log(a);
console.log("Type of a: ", typeof a);

//* NaN is the result of the arithmetic operation when the string cannot be converted to a number

console.log(a === NaN);

console.log(isNaN(a));

let text = "A";

let isValidNaN = isNaN(text); //This checks if the casted value isNan

console.log(isValidNaN);
console.log("-------");
console.log(Number.isNaN(isValidNaN));
console.log("-------");
console.log(Number.isNaN(a)); //This checks the directl value if its NaN, the non casted one

// ! Infinities - biggest number in Javascript
console.log("Infitnieies: \n");

let az = 1 / 0;
let b = -Infinity;
console.log(az);
console.log(b);
console.log(typeof az);
