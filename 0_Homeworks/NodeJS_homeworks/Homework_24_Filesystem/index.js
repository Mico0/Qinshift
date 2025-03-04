import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import userService from "./usersService.js";
import logToFile from "./logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//todo: ask about how join works in this scenario
const filePath = path.join(__dirname, "homework.txt");

// console.log(dirPath);

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "Homework 02 in Basic Node \n");
  console.log("Txt file succesfully created");
} else {
  console.log("Txt file already exists");
}

const string = "FINISHED! \n";
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
// userService.deleteUser(25);
//userService.deleteAll();
userService.getUserById(300);

export { logToFile };
