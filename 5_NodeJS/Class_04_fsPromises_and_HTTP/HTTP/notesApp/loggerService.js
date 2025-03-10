import EventEmitter from "node:events";
import { appendText } from "./fileService.js";

class LoggerEmitter extends EventEmitter {}

const loggerEmitter = new LoggerEmitter();

loggerEmitter.on("log", (message) => {
  const date = new Date().toString();
  appendText(
    "logs.txt",
    `
    =====================
    ${message},
    Date and time: ${date}
    =====================
    `
  );
});

export default loggerEmitter;
