import express from "express";
import cors from "cors";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import exp from "constants";

import { router as studentRouter } from "./routes/students.routes.js";

const app = express();
// console.log(app);
const PORT = process.env.PORT || 3000;
console.log(PORT);

const HOST = process.env.HOST || "0.0.0.0";

app.use(express.json());

app.use(
  cors()
  // {
  // methods: ["GET", "POST"],
  // }
);

const currentFileUrl = import.meta.url; //! this sends back the current file url
const currentFilePath = fileURLToPath(currentFileUrl); //! this parses the url in to a path
const projectPath = path.dirname(currentFilePath);

const homePagePath = path.join(projectPath, "homePage");
const aboutPagePath = path.join(projectPath, "aboutPage");

app.use("/home", express.static(homePagePath));

app.use("/about", express.static(aboutPagePath));

app.use("/api", studentRouter);

app.get("/", (req, res) => {
  //   res.send("Hello mate");
  res.json({
    message: `Hello mate!`,
  });
});

app.listen(PORT, HOST, () => {
  console.log(`App listening on ${HOST}:${PORT}`);
});
