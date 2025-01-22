function calculator(num, num1, operation) {
  let result = operation(num, num1);
  return result;
}

//* Arrow Functions
let functionName = (parameters) => {
  // function body
};
//!  Name      Param  Func + Return
let arrowFnc = (a, b) => a + b;
//! Shorter way of writing functions, one liner functions

console.log(calculator(5, 5, arrowFnc));

console.log(calculator(5, 5, (a, b) => a * b));

let multipleLineArrowFnc = () => {
  let a = 10;
  let obj = {
    name: "Milan",
    surname: "Ognjanoski",
  };
  let b = 25;
  return obj;
};

//! Multiple line arrow functions must always have a "return" otherwise it returns undefined by default

console.log(multipleLineArrowFnc());
