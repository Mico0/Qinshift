//! Functions as first class citizens

//! Storing function in a variable

let sayHello = function () {
  console.log("Hello");
};
sayHello();

//! sayHello is a function expression (not hoisted), while sayBye is a function declaration (hoisted)

function sayBye() {
  console.log("Bye");
}

let sayByeV = sayBye;
sayByeV();

//! Storing functions in arrays
//! This technique is useful for dynamically applying multiple operations to a number without modifying the core logic

let isPositive = (number) => (number >= 0 ? "Positive" : "Negative");
let isEven = (number) => (number % 2 === 0 ? "Even" : "Odd");
let countDigits = (number) =>
  number >= 0 ? number.toString().length : number.toString().length - 1;

let numberFncs = [
  isPositive,
  isEven,
  countDigits,
  (number) =>
    number % 3 === 0 ? "Is divisable by 3" : "It is not divisable by 3",
];

// console.log(numberFncs[0](2));
// console.log(numberFncs[0](-2));

for (let fnc of numberFncs) {
  console.log(fnc);
  console.log(typeof fnc);
}

//! Korisno koga sakame da izvrsime povekje funkcii na eden set od podatoci, se zacuvuvaat funkciite vo niza i vo for loop gi izminuvame za odredeniot podatok / set od podatoci

//! Using functions as arguments
//! The calculator function is a higher-order function because it takes another function as an argument

let calculator = function (num, num1, calculateFNC) {
  return calculateFNC(num, num1);
};

let sum = (num, num1) => {
  return num + num1;
};

let result = calculator(5, 7, sum);
console.log(result);

//! Passing anonymous function as an argument
//! This is an example of a callback function, where we pass an anonymous function directly as an argument

calculator(10, 5, function (a, b) {
  console.log(a - b);
});

//! Returning functions as a result from another function

function calculation(operator) {
  if (operator === "+") {
    return function (a, b) {
      return a + b;
    };
  } else if (operator === "-") {
    return (a, b) => a - b;
  } else {
    console.log("Error");
    return null;
  }
}

let sumOperation = calculation("+");
let subOperation = calculation("-");
// let errOperation = calculation("*");

console.log(sumOperation(2, 3));

console.log(subOperation(4, 2));

// console.log(errOperation(2, 2));

let resultz = calculation("-")(3, 2);
console.log(resultz);

function sumNumbers(num) {
  let sum = num;
  return function (num) {
    sum += num;
    return function (a) {
      sum += a;
      return function (b) {
        sum += b;
        return function (c) {
          sum += c;
          return function (d) {
            sum += d;
            return sum;
          };
        };
      };
    };
  };
}

//! Typically used for its enclosing scope

//! What is this?
//! This is an example of a curried function that uses closures to maintain state across multiple function calls.

//! How Does It Work?
//! The function sumNumbers(num) initializes sum with the first argument (num).
//! It returns another function, which takes a new number and adds it to sum, then returns another function.
//! This process continues until the final function returns the accumulated sum.

//! Why is it Used?
//! 1️⃣ Closures (Maintaining State)
//! Each nested function retains access to the sum variable in its enclosing scope, preserving the running total.

//! 2️⃣ Function Currying
//! Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument.

//! 3️⃣ Controlled Execution
//! Instead of calculating the sum immediately, it delays execution until all functions have been called.

//! How the Execution Works
//! Let's break it down step by step:

let a = sumNumbers(10); // sum = 10, returns a function
let b = a(5); // sum = 10 + 5 = 15, returns a function
let c = b(6); // sum = 15 + 6 = 21, returns a function
let d = c(7); // sum = 21 + 7 = 28, returns a function
let e = d(8); // sum = 28 + 8 = 36, returns a function
let f = e(8); // sum = 36 + 8 = 44, returns the final sum
console.log(f); // 44

//! Alternative and Simplified Usage
//! Instead of calling each function in separate lines, you can chain them together:

let results = sumNumbers(10)(5)(6)(7)(8)(8);
console.log(results); // 44

//! When is This Useful?

//! Partial Application: Applying arguments one at a time instead of all at once.
//! Functional Programming: Currying is widely used in FP to create reusable and composable functions.
//! Configuration Functions: Useful in settings where arguments are added dynamically over time.
//! Would you like an improved version that allows unlimited arguments dynamically? 😊

let apiCallsObj = (function apiCalls() {
  let baseUrl = "www.example.com";

  return {
    getAll: () => console.log("gettingAll " + baseUrl),
    getOne: (id) => console.log("gettingOne " + id + " " + baseUrl),
  };
})();

apiCallsObj.getAll();
apiCallsObj.getOne(5);

//! Functions with Properties and Methods

//! Function arguments

function testArguments() {
  console.log(arguments);
}

//! With the "arguments" keyword we can pass on more arguments than we have defined as entry parameters for that specific function

testArguments(
  "Milan",
  5,
  "Ognjanoski",
  { name: "Gordana" },
  [1, 2, 3],
  null,
  () => 0
);

function addToArray(array) {
  for (let arg of arguments) {
    array.push(arg);
  }
  return array;
}

let result3 = addToArray([], 1, 2, 3, 4, 5, 6, 7, "Milan", "Ognjanoski", [
  "Dog",
  "Cat",
]);

console.log(result3);

//! Pure function - no side effects

function sumPure(a, b) {
  return a + b;
}

let num = 5;
let num1 = 10;

//! Impure function - may have side effects because we are dependant on the variables, if the variable is changed to exampe "Something" the result of the function will be invalid, generally impure functions are functions that use global variables, for examples DOM functions

function sumImpure() {
  return num + num1;
}

console.log(sumImpure());
