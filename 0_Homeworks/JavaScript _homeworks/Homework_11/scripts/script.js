function checkType(input) {
  return typeof input;
}
console.log("==========\n\n");
console.log(checkType(true));
console.log(checkType(2));
console.log(checkType("lestring"));
console.log(checkType(undefined));
console.log(checkType(null));
console.log("\n==========\n\n");

function ageConvertor(age, conversion) {
  if (conversion === "dog") {
    return age * 7;
  } else if (conversion === "human" && age > 0) {
    return (age / 7).toFixed(2);
  } else return "Invalid conversion value";
}

let age = parseInt(prompt("Enter the age: "));
// console.log(typeof age);
let conversion = prompt("Enter the conversion value: dog / human");

console.log("==========\n\n");
console.log(ageConvertor(age, conversion));
console.log("\n==========\n\n");

function ATM(withdrawAmmount, saving) {
  if (withdrawAmmount > saving) {
    return "Not enougn money to fulfill your request";
  } else {
    return `You withdrew ${withdrawAmmount} and have ${
      saving - withdrawAmmount
    } left on your account`;
  }
}

hardcodedMoney = 24000;
withdrawAmmount = parseInt(prompt("Enter how much money you want to withdraw"));

console.log("==========\n\n");
console.log(ATM(withdrawAmmount, hardcodedMoney));
console.log("\n==========\n\n");
