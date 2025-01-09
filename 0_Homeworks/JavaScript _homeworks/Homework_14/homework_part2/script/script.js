let numArray = [2, 22, 31, 19, 3, 13, 24];

let resultList = document.getElementById("resultList");
let resultDiv = document.getElementById("result");

let sum = 0;
resultDiv.innerHTML += "The sum of all numbers is: ( ";
for (number of numArray) {
  sum += number;
  resultList.innerHTML += `<li>${number}</li>`;
  resultDiv.innerHTML += `${number} + `;
}
resultDiv.innerHTML += `= ${sum} )`;
