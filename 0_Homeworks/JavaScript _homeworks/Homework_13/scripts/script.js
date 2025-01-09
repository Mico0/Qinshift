function Animal(name, kind) {
  this.name = name;
  this.kind = kind;

  this.speak = function (string) {
    console.log(`${this.name} the ${this.kind} says ${string}`);
  };
}
let message = prompt("Enter what you want the animal to say");
let animal = new Animal("Shemsa", "Calico Cat");
animal.speak(message);

function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;
  this.checkIfRead = function () {
    if (readingStatus === "true") {
      return `Already read \`${this.title}\` by ${this.author}`;
    } else if (readingStatus === "false") {
      return `You still need to read \`${this.title}\` by ${this.author}.`;
    }
  };
}

let title = prompt("Enter a title of the book");
let author = prompt("Enter the books author");
let readingStatus = prompt(
  'Enter "true" if you read the book or "false" if you have not.'
);

let book = new Book(title, author, readingStatus);

console.log(book);
console.log(book.checkIfRead());
