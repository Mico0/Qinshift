//* Definition of a basic function
function fnc(a, b) {
  return;
}
//* Call of a basic function
fnc();

//* Anonyous function simple declaration
let anonymousFnc = function (a, b) {
  console.log("Anonymous function");
};

anonymousFnc();

// TODO: learn about callbacks

function calculator(num, num1, operation) {
  let result = operation(num, num1);
  return result;
}

let result = calculator(2, 2, function (num, num1) {
  return num + num1;
});

let result1 = calculator(5, 5, function (num, num1) {
  let result1 = num * num1;
  return result1;
});

console.log(result);

let subtract = function (c, d) {
  return c - d;
};
console.log(calculator(4, 2, subtract));
//* We pass the reference to the result of the anon function subtract
