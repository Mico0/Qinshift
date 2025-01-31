//! Destructuring

let numbers = [1, 2, 3, 4, 5, 6];

//! Using index
// let first = numbers[0];
// let second = numbers[1];

// let firstNum = numbers.shift();
// let secondNum = numbers.shift();

// let rest = numbers;

// console.log(first, second, rest);

//! ECMA Script 6 destructuring of an array
//! Extracts the first three elements and assigns them to variables.
//! The remaining elements (if any) are stored in an array `restNum`.
//! Mostly used when we want to extract just a couple of elements from an array, not a large number of them

let [firstNumb, secondNumb, a, ...restNum] = numbers;
console.log(firstNumb, secondNumb, a, restNum);

let obj = {
  firstName: "Milan",
  lastName: "Ognjanoski",
  age: 23,
};

//! destructuring using property names
let { firstName, lastName, age } = obj;

//! destructuring using new variables "property:<variable name>"
let { firstName: ime, lastName: prezime, ...rest } = obj;

console.log(ime, prezime, rest);
console.log(obj);

function returnAritmetiOperations() {
  let operations = [(num, num1) => num + num1, (num, num2) => num - num2];
  return operations;
}

let [sum, sbutract] = returnAritmetiOperations();

console.log(sum, sbutract);

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [z, b, c, d, e, f, g, h, i, j] = numbers1;
console.log(z, b, c, d, e, f, g, h, i, j);

let arrA = [1, 2, 3, 4, 5];
let arrB = [6, 7, 8, 9, 0];
let arrC = arrA.concat(arrB);

console.log(arrC);

//! Spread Operator in Array Destructuring
//! Extracts the first element into `y`
//! Stores the remaining elements into `restz` as an array

let [y, ...restz] = numbers1;

//! Using the Spread Operator to Merge Arrays
//! Combines `arrA` and `arrB` into a new array `arrD`
let arrD = [...arrA, ...arrB];

console.log(arrD);

function recursiveSum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let [first, ...rest] = array;
    return first + recursiveSum(rest);
  }
}

let result = recursiveSum(numbers1);
console.log(result);

let person = {
  firstName: "Milan",
  lastName: "Ognjanoski",
};

let addressInfo = {
  street: "Temnica",
  number: 1,
  town: "Skopje",
};

let concatObj = {
  ...person,
  ...addressInfo,
  age: 23,
};

console.log(concatObj);

//! Merging two objects into one using spread operator and changing some of the properties values
//! Merging Two Objects Using the Spread Operator
//! Combines `person` and `addressInfo` into a new object `combinedObj`
//! Overrides `firstName` and `town` with new values
//! Order Matters (Property Overriding):
//! Since ...person comes before ...addressInfo, the properties of addressInfo overwrite any matching properties in person.
//! The explicit values (firstName: "Mico", town: "Gostivar") override both person and addressInfo values.

let combinedObj = {
  ...person,
  ...addressInfo,
  firstName: "Mico",
  town: "Gostivar",
};

console.log(combinedObj);

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 11, 12, 13],
];

// function flatMatrixToArray(array, currentElement) {
//   array.push(currentElement);
//   return array;
// }

console.log(matrix.length);

let newArray = [];
for (let i = 0; i < matrix.length; i++) {
  //   console.log(matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    // console.log(matrix[i][j]);
    newArray.push(matrix[i][j]);
  }
}

console.log(newArray);

//! null coalescing operator
let zz = null;

//! without null coalescing operator
let x = zz;
if (x === null) {
  x = 3;
}

//! with null coalescing operator
//! the double quotations ?? check if the variable is null if its not it assigns the value on the right
//! Nullish Coalescing Operator (??)
//! The `??` operator checks if the value on the left is `null` or `undefined`
//! If it's neither `null` nor `undefined`, it assigns the left value, otherwise assigns the right value.
let yy = zz ?? 3;
