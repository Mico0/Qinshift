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

function isPlural(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[word.length - 1] === "s") {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magic"));
console.log("=============\n\n");

function match(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));
console.log("=============\n\n");

function monthName(number) {
  switch (number) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));
console.log("============\n\n");

function isTruthy(value) {
  if (
    value === false ||
    value === undefined ||
    value === 0 ||
    value === null ||
    value === "" ||
    Number.isNaN(value)
  ) {
    return 0;
  } else {
    return 1;
  }
}

console.log(isTruthy(NaN));
console.log(isTruthy(0));
console.log(isTruthy(""));
console.log(isTruthy("false"));
console.log("============\n\n");
