import "dotenv/config";
import express from "express";
import { globalRouter } from "./const/router.const";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", globalRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the products API");
});

app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`);
});
