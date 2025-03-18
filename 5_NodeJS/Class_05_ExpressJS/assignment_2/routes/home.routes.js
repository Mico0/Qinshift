import express from "express";
import { dirname as rootDir } from "../helpers/path.helper.js";
import path from "path";

const router = express.Router();

router.get("/", (req, res, next) => {
  //   console.log(path.join(rootDir, "..", "views", "home.html"));
  res.status(200).sendFile(path.join(rootDir, "..", "views", "home.html"));
});

export { router };
