let phones = Array(30).fill(119.95);
let sum = 0;

console.log(phones);

for (let i = 0; i < 30; i++) {
  sum += phones[i] * 1.05;
}

console.log(sum);

let result = document.getElementById("result");

result.innerHTML = sum.toFixed(2);
