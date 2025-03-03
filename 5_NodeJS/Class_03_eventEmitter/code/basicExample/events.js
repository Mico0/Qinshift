// import { EventEmitter } from "events";
import { EventEmitter } from "node:events";

//! Better to use than "events" because we may have another npm package that contains the events module

const emitter = new EventEmitter();

//! Create a custom class that inherits EventEmitter's properties
class MyEmitter extends EventEmitter {}
export const myEmitter = new MyEmitter();

//! Register event
emitter.on("order-pizza", function (size) {
  console.log("From regular function");
  console.log(`Order received, making a ${size} pizza`);
  console.log("This in function: ", this);
});

emitter.on("order-pizza-arrow", (size) => {
  console.log("From arrow function");
  console.log(`Order received, making a ${size} pizza`);
  console.log("This in arrow: ", this);
});

//! FIRE / Trigger event
//! First argument is the name of the event, and then we have (n) many arguments as we have in the event callback / handler function
emitter.emit("order-pizza", "large");
emitter.emit("order-pizza-arrow", "medium");

const function1 = () => {
  console.log("Message from function one");
};
const function2 = () => {
  console.log("Message from function two");
};
const function3 = (name) => {
  console.log(`Message from function three: Hello ${name}`);
};
const function4 = () => {
  console.log(`Message from function four`);
};
const function5 = () => {
  console.log(`Message from function five`);
};
const function6 = () => {
  console.log(`Message from function six`);
};
emitter.on("my-event", function1);
emitter.on("my-event", function2);
emitter.addListener("my-event", function3);
emitter.emit("my-event", "Milan");

//! List all listeners for "my-event"
// console.log(emitter.listeners("my-event"));

//! List total number of listeners for "my-event"
// console.log(emitter.listenerCount("my-event"));

//! Remove one listener
//! If there are multiple listeners from the same handler function, the removeListener should dbe called (n) times
emitter.removeListener("my-event", function3);

myEmitter.on("anotherEvent", () => {
  console.log("Eevent emitter from My Emitter");
});

myEmitter.emit("anotherEvent");

//! Attach a one time event listener using once
emitter.once("onceEevent", function4);

emitter.emit("onceEvent");

//! Attach a listener that will be executed before all listeners

emitter.prependListener("my-event", function5);

//! Attach a prepended one time listener which will be executed only once no matter how many times its called
emitter.prependOnceListener("my-event", function6);

emitter.emit("my-event");
console.log("===================");
emitter.emit("my-event");

//! Remove all listeners
// emitter.removeAllListeners("my-event");
console.log(emitter.listenerCount("my-event"));
