function countDigits(n) {
  let counter = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    counter++;
  }
  return counter;
}

// console.log(countDigits(10));

function evenOrOdd(n) {
  if (n % 2 === 0) {
    return "Even";
  } else if (n % 2 !== 0) {
    return "Odd";
  }
}

// console.log(evenOrOdd(223));

function positiveOrNegative(n) {
  if (n < 0) {
    return "Negative";
  } else if (n > 0) {
    return "Positive";
  }
}

// console.log(positiveOrNegative(2));

let getNumberStats = (n) =>
  console.log(countDigits(n), evenOrOdd(n), positiveOrNegative(n));

getNumberStats(25);

let first = (element, color = "black") => {
  //   let clr = ;
  let header = document.getElementById(`${element}`);
  header.style.color = color;
};

let second = (element, text_size = 24) => {
  //   let text_size = ;
  let header = document.getElementById(`${element}`);
  header.style.fontSize = `${text_size}px`;
};

document.getElementById("btn").addEventListener("click", function () {
  first("header", document.getElementById("text_size").value);
  second("header", document.getElementById("color").value);
});
