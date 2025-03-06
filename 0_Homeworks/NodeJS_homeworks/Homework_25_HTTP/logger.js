import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logPath = path.join(__dirname, "students.txt");

if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, "");
  console.log("Text file has been generated.");
} else {
  console.log("Text file already exists.");
}

export default function logToFile(student_name) {
  try {
    fs.appendFileSync(logPath, `${student_name}`);
    console.log(`The student logged is ${student_name}`);
  } catch (error) {
    console.log(error);
  }
}
