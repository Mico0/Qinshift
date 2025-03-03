import emitter from "./myEvents.js";
import EventTypes from "./eventTypes.js";

//! Emitt the error event
emitter.emit(EventTypes.info);

const variable = 2;
try {
  if (variable === 3) emitter.emit(EventTypes.warning);
  else throw new error();
} catch (error) {
  console.log(emitter.emit(EventTypes.error), " ", error.message);
}
