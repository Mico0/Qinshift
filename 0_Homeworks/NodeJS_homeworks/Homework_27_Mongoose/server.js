import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config.js";
import router from "./routes/recipe.routes.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.use(express.json());

server.use("/recipes", router);

server.use("/health", (req, res, next) => {
  res.status(200).send({ message: "Ok" });
});

async function startServer() {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
