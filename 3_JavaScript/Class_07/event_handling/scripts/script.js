function greet() {
  console.log("Hello event handlers \n");
}

function countRabbits() {
  for (let i = 0; i <= 3; i++) {
    alert("Rabbit number " + i);
  }
}

//* TRADITIONAL DOM EVENT HANDLERS

//! element.onevent = functionName;
//! Main drawback is you can attach only one function to an element
