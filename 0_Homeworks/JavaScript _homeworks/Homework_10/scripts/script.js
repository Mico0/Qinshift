function convert(n) {
  let seconds = n * 60;
  return seconds;
}

console.log(`Converted 5 minutes to ${convert(5)} seconds`);
console.log(`Converted 3 minutes to ${convert(3)} seconds`);
console.log(`Converted 2 minutes to ${convert(2)} seconds`);
console.log("=============\n\n");

function addition(num) {
  return console.log(num + 1);
}

addition(0);
addition(5);
addition(11);
console.log("=============\n\n");

function howManySeconds(hour) {
  let seconds = convert(hour) * 60;
  return console.log(`Converted ${hour} hours to ${seconds} seconds`);
}

howManySeconds(2);
howManySeconds(10);
howManySeconds(24);
console.log("=============\n\n");

function remainder(n1, n2) {
  let modulus = n1 % n2;
  return console.log(`The remainder of ${n1} and ${n2} is: ${modulus}`);
}

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);
console.log("=============\n\n");

function animals(num_chicken, num_cow, num_pig) {
  let result = num_chicken * 2 + num_cow * 4 + num_pig * 4;
  return result;
}

console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));
console.log("=============\n\n");

function compare(string1, string2) {
  if (string1.length === string2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(compare("AD", "CD"));
console.log(compare("ABC", "DE"));
console.log(compare("hello", "sedc"));
console.log(compare("hello", "sedca"));
console.log("=============\n\n");
