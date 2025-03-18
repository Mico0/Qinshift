import { dir } from "console";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const filename = fileURLToPath(import.meta.url); //! Gets the current file path
const dirname = path.dirname(filename); //! Gets the directory of where the file in the filename variable is stored

console.log(filename);
console.log(dirname);

router.get("/", (req, res, next) => {
  //   console.log("In another middleware!");
  res.sendFile(path.join(dirname, "../", "views", "shop.html"));
});

export { router };
