import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logPath = path.join(__dirname, "logs.txt");

if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, "");
  console.log("Log file has been generated.");
} else {
  console.log("Log file already exists.");
}

export default function logToFile(action, text) {
  const timestamp = new Date().toString();
  try {
    fs.appendFileSync(
      logPath,
      `${timestamp} Action performed: ${action}, ${text}`
    );
    console.log(`Successfully logged ${action}`);
  } catch (error) {
    console.log(error);
  }
}
