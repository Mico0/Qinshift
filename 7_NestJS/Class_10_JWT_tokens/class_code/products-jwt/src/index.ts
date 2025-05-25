import "dotenv/config";
import express from "express";
import { v4 as uuid } from "uuid";
import { globalRouter } from "./const/router.const";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", globalRouter);

console.log(uuid());

app.get("/", (req, res) => {
  res.send("Welcome to the products api");
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
