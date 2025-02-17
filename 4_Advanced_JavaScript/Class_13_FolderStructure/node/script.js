// console.log("Hello from node.js");

function sayHello(name) {
  console.log(`Hello ${name}`);
}

// sayHello("Milan");

let obj = {
  name: "Milan",
  items: ["one", "two", "three"],
  newObj: {
    array: [
      [1, 2, 3, 4],
      [3, 2, 45, 6],
      [5, 4, 5, 3],
    ],
  },
};
// console.log(obj);

const say = require(`./say.js`);
const {
  sobiranje: sum,
  odzemanje: subtract,
  mnozenje: multiply,
} = require(`./calculator.js`);

// console.log(say);

console.log(say.sayHello("Milan"));
console.log(say.sayBye("Mico"));

// console.log(sobiranje(2, 4));

//! WORKING WITH FILE SYSTEM

const textService = require(`./textService.js`);

// textService.addText("Hello from Qinshift Academy Group 1");

// textService.appendTxt("We are learning Node.js File System");

let textFileContent = textService.readText();

console.log(textFileContent);

const jsonReader = require(`./jsonReaderService.js`);

let students = {
  students: [
    {
      firstName: "Milan",
      lastName: "Ognjanoski",
    },
    {
      firstName: "Trajan",
      lastName: "Stevkovski",
    },
    {
      firstName: "Radomir",
      lastName: "Goshevski",
    },
  ],
};

// jsonReader.addData(students);

jsonReader.appendData({ grades: [1, 2, 3, 4, 5, 6] });
