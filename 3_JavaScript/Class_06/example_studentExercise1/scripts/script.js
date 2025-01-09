let body = document.querySelector("body");
let firstDiv = body.firstElementChild;
console.log(firstDiv);

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

let lastDiv = document.querySelectorAll("div")[2];
console.log(lastDiv);

let header3 = lastDiv.lastElementChild;
console.log(header3);

let header1 = lastDiv.firstElementChild;
console.log(header1);

let paragraphInSecond = document.getElementsByClassName("second");
// console.log(paragraphInSecond);
let textContent = paragraphInSecond[0].innerText;
console.log(textContent);

let textElement = document.querySelector("text");
textElement.innerText += " text";

header1.innerText = "Changed text of header 1";
header3.innerText = "Changed text of header 3";

//TODO: Do the other exercises
