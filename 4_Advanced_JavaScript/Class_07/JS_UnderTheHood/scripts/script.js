let first = 5;

//! call stack execution order

function second() {
  let a = 1; //! Local variable 'a' is created in the 'second' execution context
  let b = third(1, 2); //! Calls 'third()', pushing its execution context onto the call stack

  return a + b; //! After 'third()' returns, execution returns here
}

function third(a, b) {
  let c = 3; //! Local variable 'c' is created in the 'third' execution context
  return a + b + c; //! Calculates and returns the result (1 + 2 + 3 = 6)
}

let fourth = second(); //! Calls 'second()', which in turn calls 'third()', and 'fourth' gets the final result (7)

//! setTimeout() setInterval()
//! setTimeout accepts as arguments a callback function and a second argument which is the time for the timeout in miliseconds

setTimeout(() => {
  console.log("Hi im a timeout");
}, 3000);

//! if the callstack is full the function will fire after 3000 + 3000 ms

//! Callback Functions: A callback function is a function that is passed into another function as an
//! argument and is executed after the completion of the main function. Callbacks are crucial for handling synchronous operations like reading files, making network requests, or listening to events.

//! Callback e funkcija sto ke se izvrsi posle nekoe vreme ili posle izvrsuvanje na glavnata funkcija kade sto e povikana

function printName(name, callback) {
  console.log("Hello " + name);
  setTimeout(() => {
    callback();
  }, 2000);
}
console.log(new Date().getSeconds());
printName("Trajan", () => {
  console.log("Im a simple callback");
});

//! setInterval() accepts as arguments a callback function and the interval time (in milliseconds)
let intval = setInterval(() => {
  console.log("Interval"); //! Callback function executed at regular intervals
}, 500);

//! The function will continue to run indefinitely until cleared using clearInterval()

document.getElementById("btn").addEventListener("click", () => {
  clearInterval(intval);
});
