//* ARITHMETIC OPERATORS

let a = 4;
let b = 2;

let sum = a + b;
console.log("a + b = " + sum);

let subtract = a - b;
console.log("a - b = " + subtract);

let multiply = a * b;
console.log("a * b = " + multiply);

let divide = a / b;
console.log("a / b = " + divide);

let modulus = a % 3;
console.log("a % 3 = " + modulus);
//* Modulus remain can be either 0 no remain, 1 or 2 maximum

let increment = 1;
increment++;
console.log("increment++ =  " + increment);

increment--;
console.log("increment -- = " + increment);

//* COMPARISON OPERATORS

console.log("Is a < b: ", a < b);
console.log("Is a > b: ", a > b);
console.log("Is a <= b: ", a <= b);
console.log("Is a >= b: ", a >= b);
console.log("Is a == b: ", a == b);
console.log("Is a != b: ", a != b);

//* ASSIGNMENT OPERATORS

a += b;
console.log("a+=b OR a = a + b: ", a);

a -= b;
console.log("a-=b OR a = a - b: ", a);

a /= b;
console.log("a/=b OR a = a / b: ", a);

a *= b;
console.log("a*=b OR a = a * b: ", a);

a %= b;
console.log("a%=b OR a = a % b: ", a);

let feet = 100;
let conversionFactor = 3.281;
let feetToMeters = 0;

feetToMeters = feet / conversionFactor;
console.log(feetToMeters);

feet = 10;
feetToMeters = feet / conversionFactor;
console.log(feetToMeters);

feet = 20;
feetToMeters = feet / conversionFactor;
console.log(feetToMeters);

feet = 50;
feetToMeters = feet / conversionFactor;
console.log(feetToMeters);

let side1 = 2;
let side2 = 3;
let area = 0;

area = side1 * side2;
console.log(area);

let pi = 3.14;

let r = 3;

let circleArea = pi * Math.pow(r, 2);

console.log("Circle area is: " + circleArea);
