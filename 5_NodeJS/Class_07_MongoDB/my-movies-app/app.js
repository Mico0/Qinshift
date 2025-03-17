import express from "express";
import dotenv from "dotenv";
import { connectDB, getDB } from "./config/db.js";
import router from "./routes/movie.routes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Define the type of data

app.use(express.json());

// Routes
app.use("/api/movies", router);

app.get("/health", (req, res) => {
  res.json(200, { status: "OK" });
});

// Connect to mongodb and start server

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:", PORT);
    });
  } catch (error) {
    console.error("Failed to stary server", error);
    process.exit();
  }
}
getDB();
startServer();
