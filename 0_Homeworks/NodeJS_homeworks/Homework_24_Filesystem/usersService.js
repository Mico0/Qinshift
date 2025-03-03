import { error } from "console";
import fs from "fs";
import { logToFile } from "./index.js";

// Function to read existing users from users.json file
// try {
//   const existingUsers = fs.readFileSync("users.json", "utf8");
//   const parsedUsers = JSON.parse(existingUsers);
//   console.log(parsedUsers);
// } catch {
//   console.log("Error reading file", error);
// }

const getUserById = (userId) => {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  const foundUser = parsedUsers.find((user) => user.id === userId);
  //   if (!foundUser) {
  //     return {};
  //   }
  //   return foundUser;

  //   return foundUser ? foundUser : {}; // ternary operator
  logToFile(
    `GET_USER_BY_ID`,
    `The user found is ${JSON.stringify(foundUser)} \n`
  );
  return foundUser ?? {}; // nullish coalescing operator
};

const foundUser = getUserById(100);
// console.log(foundUser);

const addUser = (user) => {
  const existingUsers = fs.readFileSync("users.json", "utf8");
  const parsedUsers = JSON.parse(existingUsers);
  const newUserId = parsedUsers.length + 1;
  const newUser = {
    id: newUserId,
    name: user.name,
    username: user.username,
    email: user.email,
  };
  parsedUsers.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
  logToFile(`ADD_USER`, `The user added is ${JSON.stringify(newUser)} \n`);
};

const editUser = function (userID, userObj) {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  // console.log(existingUsers);
  const parsedUsers = JSON.parse(existingUsers);
  const foundUser = parsedUsers.find((user) => user.id === userID);
  if (foundUser) {
    foundUser.name = userObj.name;
    foundUser.username = userObj.username;
    foundUser.password = userObj.password;
  }
  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
  logToFile(
    `EDIT_USER`,
    `The user you have edited is ${JSON.stringify(foundUser)} \n`
  );
};

const deleteUser = function (userID) {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const foundUser = parsedUsers.find((user) => user.id === userID);

  parsedUsers.forEach((user) => {
    if (foundUser.id === user.id) {
      parsedUsers.splice(parsedUsers.indexOf(foundUser), 1);
    }
  });
  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
  logToFile(
    `DELETE_USER`,
    `The user deleted is ${JSON.stringify(foundUser)} \n`
  );
};

const deleteAll = function () {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  let parsedUsers = JSON.parse(existingUsers);

  parsedUsers = [];

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);
  logToFile(`DELETE_ALL`, `You have deleted all users \n`);
};

// deleteAll();

export default { getUserById, addUser, editUser, deleteUser, deleteAll };
