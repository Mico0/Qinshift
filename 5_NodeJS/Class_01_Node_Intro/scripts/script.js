const myName = "Milan";

console.log(`Hello my name is ${myName}. This is my first nodejs app.`);

// console.log(global);
// console.log(process);

//! Process returns general information about the location and the file we are in at the moment

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

// setTimeout(() => {
//   console.log("Delay for 3 seconds");
// }, 3000);

sayHello("Milan");

// Exits (cancels) the server
// process.exit();

//! Typical event handling in node.js
process.stdout.write("Enter something: ");
process.stdin.on("data", (input) => {
  const userInput = input.toString().trim();
  console.log(`You have entered ${userInput}`);
});
