// JS Object

let obj = {
  name: "Trajan",
  age: 23,

  showName: function () {
    console.log(this.name);
  },
};

// JSON object

let json = {
  name: "Milan",
  age: 30,
};

// JSON keys are inbetween " " and they cannot have functions in them

let name = json.name;
let age = json["age"];

console.log(name, age);

let academy = {
  academyName: "Qinshift Academy",
  trainer: "Trajan Stevkovski",
  assistant: "Filip Zlatanovski",
  students: ["Ana", "Marija", "Dragan"],
};

console.log(academy);

let jsonContent = JSON.stringify(academy); // we get a string version of the object
console.log(jsonContent);

let parsedJSON = JSON.parse(jsonContent); // we get a json version from a string
console.log(parsedJSON);
