import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import userService from "./usersService.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//todo: ask about how join works in this scenario
const filePath = path.join(__dirname, "homework.txt");
const logPath = path.join(__dirname, "logs.txt");

// console.log(dirPath);

if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, "");
  console.log("Log file has been generated.");
} else {
  console.log("Log file already exists.");
}

function logToFile(action, text) {
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

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "Homework 02 in Basic Node");
  console.log("Txt file succesfully created");
} else {
  console.log("Txt file already exists");
}

const string = "\nFINISHED!";
try {
  fs.appendFileSync(filePath, string);
  console.log(`The string: ${string} was appended to the file`);
} catch (error) {
  console.log(error);
}

console.log(fs.readFileSync(filePath, "utf-8"));

const newUser = {
  name: "Bob",
  username: "bobbobsky",
  email: "bob@email.com",
};

userService.addUser(newUser);

userService.editUser(1, {
  name: "Milan Ognjanoski",
  username: "m1c00",
  password: "test1234;",
});
userService.deleteUser(25);
//userService.deleteAll();
userService.getUserById(3);

export { logToFile };
