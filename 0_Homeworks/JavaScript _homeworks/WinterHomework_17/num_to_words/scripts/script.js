let textNumbers = document.getElementById("numbers");
let textWords = document.getElementById("words");
let errorMessage = document.getElementById("error");
let btn = document.querySelector("#convert");

textNumbers.addEventListener("input", function (e) {
  let value = e.target.value;
  if (isNaN(value) || value === "") {
    errorMessage.textContent = "Please enter only numbers.";
    textWords.value = "";
  } else {
    errorMessage.textContent = "";
    let number = parseInt(value);
    // console.log(number);
    let word = convert(number);
    textWords.value = word;
  }
});

function convert(number) {
  if (isNaN(Number(number)) || number < 0 || number > 1000000) {
    errorMessage.textContent = "Please enter a number between 0 or 1 000 000";
  }
  if (number === 0) return "zero";
  if (number === 1000000) return "one million";

  let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let result = "";

  if (number >= 1000) {
    let thousands = Math.floor(number / 1000);
    // console.log(`Thousands: ${thousands}`)
    number = number % 1000;
    // console.log(`Thousands: ${number}`)

    if (thousands >= 100) {
      let hundreds = Math.floor(thousands / 100);
      thousands = thousands % 100;
      result += `${ones[hundreds]} hundred `;
      // console.log(`Thousands: ${result}`)
    }

    if (thousands >= 20) {
      let ten = Math.floor(thousands / 10);
      let one = thousands % 10;
      result += `${tens[ten]}`;
      if (one > 0) result += `-${ones[one]}`;
    } else if (thousands > 0) {
      result += ones[thousands];
    }

    result += " thousand ";
    // console.log(`Result 2: ${result}`)
  }

  if (number > 0) {
    if (number >= 100) {
      let hundreds = Math.floor(number / 100);
      number = number % 100;
      result += `${ones[hundreds]} hundred `;
    }

    if (number >= 20) {
      let ten = Math.floor(number / 10);
      let one = number % 10;
      result += `${tens[ten]}`;
      if (one > 0) result += ` - ${ones[one]}`;
    } else if (number > 0) {
      result += ` ${ones[number]}`;
    }
  }

  return result;
}
