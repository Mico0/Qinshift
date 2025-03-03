import { EventEmitter } from "node:events";
import { myEmitter } from "./events.js";

const emitter = new EventEmitter();

emitter.emit("order-pizza"); //! Wont fire an event because its a completely new instance of the event emitter class

myEmitter.emit("anotherEvent"); //! Will fire the event because we import our emitter / instancefrom the event.js file
