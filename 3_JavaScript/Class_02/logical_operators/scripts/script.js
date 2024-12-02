//* We always check the most specific case in logical operations (especially in && AND),
//* then everything else, because the outcome is dependant on the first most specific case

let expr1 = 4 < 7; // true
console.log(expr1);
let expr2 = 5 != 8; // false
console.log(expr2);

let a = 10;
let b = 12;
let expr3 = a > b; // false

let expressionAND = expr1 && expr2 && expr3;
console.log("expressionAND = ", expressionAND);

let expressionOR = expr1 || expr2 || expr3;
console.log("ExpressionOR = ", expressionOR);

let complexExpression = 5 > 2 && 3 <= 7 && 5 != 6;
console.log("complexExpression = ", complexExpression);

let sumCheck = 5 + 2 >= 10 - 7 && 5 > 5;
console.log("sumCheck = ", sumCheck);

console.log("-----------");

//* Truthy and Falsy

let d = 3;
let f = 4;

let test = 5 > 3 && (d = f); // Will return true because 5=7 == truthy value, not valid expression
let test1 = 5 > 3 && d === f; // Valid expression
