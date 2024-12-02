let message = "Hello from Qinshift Academy";

let hello = "Hello from ....";

console.log(message + "\n\n" + hello);

let name = "Milan";

let helloMessage = "Hello " + name + " from Qinshift Academy";
//* Concatenation of 3 strings

console.log(helloMessage);

console.log("5" + 5);
//* + is used as an addition symbol and concatenation symbol, Javascript will compile this as concatenation

console.log("5" - 5);
//* - is only an aritchmetic operation, Javascript will compile this as subtraction

// console.log(5 + Number("5"));

let provider = "www.google.com";

let id = "id=2421";

let interpoletadeUrl = `${provider}?${id}`;
//* Template String provide an easy way to interpolate variables and expressions into strings.
//* The method is called string interpolation.
//* Interpolation of strings is used over concatenation since its more light on memory and easier to understand

console.log(interpoletadeUrl);

let quote = "It's really nice to be a programmer";
let secondQuote = 'It\'s really "nice" to be a programmer';
console.log(secondQuote);
