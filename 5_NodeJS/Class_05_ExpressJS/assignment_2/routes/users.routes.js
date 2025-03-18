import express from "express";
import { dirname as rootDir } from "../helpers/path.helper.js";
import path from "path";

const router = express.Router();

router.get("/add-users", (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, "../views/add-user.html"));
});

router.post("/users", (req, res) => {
  const body = req.body;
  console.log(body);
  res.status(300).redirect("/");
});

export { router };
