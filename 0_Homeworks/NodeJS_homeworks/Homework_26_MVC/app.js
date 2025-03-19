import express from "express";
import router from "./routes/trainer.routes.js";

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.json());

app.use("/trainers", router);
app.use("/home", express.static("public"));

app.listen(PORT, HOST, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});
