import { EventEmitter } from "node:events";
import EventTypes from "./eventTypes.js";

const emitter = new EventEmitter();

//! Register all events
emitter.on(EventTypes.warning, () => {
  console.log("Warning event triggered!");
});

emitter.on(EventTypes.info, () => {
  console.log("Info event triggered!");
});
emitter.on(EventTypes.error, () => {
  console.log("Error event triggered!");
});

export default emitter;
