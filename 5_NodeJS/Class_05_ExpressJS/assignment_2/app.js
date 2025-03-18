import express from "express";
import { dirname as rootDir } from "./helpers/path.helper.js";
import path from "path";
import { router as homeRouter } from "./routes/home.routes.js";
import { router as userRouter } from "./routes/users.routes.js";

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.urlencoded({ extended: false }));
console.log(rootDir);
app.use(express.static("public"));

app.use("/admin", userRouter);
app.use(homeRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "..", "views", "404.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
