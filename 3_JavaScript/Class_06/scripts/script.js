console.log(document);

let myHeader = document.getElementById("myTitle");

console.log(myHeader);
console.log(myHeader.innerText); //* returns the text of a text node

//* Selecting element by Class Name

let paragraphs = document.getElementsByClassName("myParagraph"); //* returns a collection of elements with class name myParagraph
console.log(paragraphs);

let secondParagraph = document.getElementsByClassName("second"); //* returns a collection even if there is 1 element only
console.log(secondParagraph);

let para = document.getElementsByTagName("p"); //* returns a collection of all the tags selected by the tag name
console.log(para);

let divs = document.getElementsByTagName("div");
console.log(divs);

console.log(paragraphs[0]);

//* QUERY SELECTORS

//! .querySelector will always return the first element it finds
//! .querySelectorAll will always return a collection of elements

//* query by tag name
let paragraph1 = document.querySelectorAll("p");
console.log("Paragraph 1 \n", paragraph1);

//* query by class name
let text = document.querySelector(".second");
console.log("Text \n", text);

//* query by ID
let queryById = document.querySelector("#myTitle");
console.log("Title \n", queryById);

//* SIbLINGS

let firstParag = document.querySelector("#myTitle");
// console.log(firstParag);
let nextSibling = firstParag.nextElementSibling;
let prevSibling = nextSibling.previousElementSibling;
console.log("Next sibling is: \n", nextSibling);
console.log("Previous sibling \n", prevSibling);

//* PARENT ELEMENT

let parent = prevSibling.parentElement;
console.log("Parent \n", parent);

//* CHILDREN ELEMENTS

let children = parent.children;
let firstChild = parent.firstElementChild;
let lastChild = parent.lastElementChild;

console.log("Children \n", children);
console.log("First child\n", firstChild);
console.log("Last child\n", lastChild);

//* GET TEXT CONTENT

let mainDiv = document.getElementById("main");
let DivText = mainDiv.textContent; //* This will take the text content of all the child elements that contain text
//* Will display the text as it is in the HTML with whitespaces and everything
console.log(DivText);
let textDiv = mainDiv.innerText;
//* Will display only the text, without any whitespace
console.log(textDiv);

//* changing / updating text in elements

let mainHeader = document.getElementById("myTitle");

mainHeader.innerText = "Changing the inner text"; //* changes the text of the element
// debugger;
mainHeader.innerText += ", adding some text here!"; //* concatinates the string to the already existing text

//! mainHeader.innerText = "<p> Inner Text</p>";
//* inner text changes only the text does not care about html tags or anything else
console.log(mainHeader);

let divMain = document.getElementById("main");
console.log(divMain.innerHTML); //* returns the div's inner HTML as a string
// divMain.innerHTML = `<p id="firstParagraph">First HTML element added dynamically </p>`;
// divMain.innerHTML = ""; //! deletes the HTML in the DIV

//! createElement()
//! createTextNode()
//! appendChild() / removeChild()

//! hasAttribute()
//! getAttribute()
//! setAttribute()
//! removeAttribute()

//* changing style
let divMainDiv = document.getElementById("main");
// divMainDiv.style.color = "red";
// divMainDiv.style.backgroundColor = "black";
divMainDiv.style.textAlign = "center";
// divMainDiv.style.display = "none";
console.log(divMainDiv.style);

divMainDiv.classList.add("bg-color");
//! divMainDiv.classList.add("bg-color", "test","test-2") - adding multiple classes
