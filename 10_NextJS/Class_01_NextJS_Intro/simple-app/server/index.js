import express from "express";
import cors from "cors";

// Database Mock
const users = ["John Doe", "Jane Doe"];

// Create the Express application instance.
// `app` is the central object we use to register middleware and routes.
const app = express();

// Middleware Registration:
// app.use(cors()) adds CORS response headers automatically so browsers allow requests from other origins.
app.use(cors());
// express.json() is built-in middleware that parses incoming JSON request bodies and puts the resulitng object on `req.body`
app.use(express.json());

// Route Handlers:

// http://localhost:3000/users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// http://localhost:3000/users
app.post("/users", (req, res) => {
  const user = req.body;

  users.push(user.name);

  res.json(user);
});

// Start the HTTP server listening on port 3000.
// When the server starts, the callback runs once.
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
