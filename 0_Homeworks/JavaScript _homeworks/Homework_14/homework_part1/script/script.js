let headers = document.getElementsByTagName("h1");
console.log(headers);
headers[0].innerText = "Ya JavaScript is cool as well.";
headers[1].innerText = "Indeed its changed";

let paragraphs = document.getElementsByTagName("p");
let paragraphCounter = 1;

for (let paragraph of paragraphs) {
  paragraph.innerText = `Number: ${paragraphCounter++} changed text`;
}

document.getElementsByTagName("text")[0].innerText =
  "Yes it is about selecting elements";
document.getElementsByTagName("h3")[0].innerText = "Did not forget about this";
