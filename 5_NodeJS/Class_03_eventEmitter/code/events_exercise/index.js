import { EventEmitter } from "node:events";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const emitter = new EventEmitter();

const EventTypes = {
  info: "info-event",
  warning: "warning-event",
  error: "error-event",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logPath = `${__dirname}/log.txt`;

console.log(logPath);

if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, "");
  console.log("Log file has been generated.");
} else {
  console.log("Log file already exists.");
}

emitter.on(EventTypes.warning, () => {
  console.log("Warning event triggered!");
  fs.appendFileSync(logPath, "\nWarning event triggered!");
});

emitter.on(EventTypes.info, () => {
  console.log("Info event triggered!");
  fs.appendFileSync(logPath, "\nInfo event triggered!");
});
emitter.on(EventTypes.error, () => {
  console.log("Error event triggered!");
  fs.appendFileSync(logPath, "\nError event triggered!");
});

emitter.emit(EventTypes.warning);
emitter.emit(EventTypes.info);
emitter.emit(EventTypes.error);
