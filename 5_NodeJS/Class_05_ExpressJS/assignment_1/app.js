import express from "express";

const app = express();

const PORT = 3001;
const HOST = "localhost";

// app.use((req, res, next) => {
//   console.log("Middleware number 1");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware number 2");
//   res.send("Hello from the middlewares");
// });

app.use("/users", (req, res, next) => {
  const name_surname = "Milan Ognjanoski";
  console.log("Middleware number 1");
  res.send(`Hello ${name_surname}`);
});

app.use("/", (req, res, next) => {
  console.log("Middleware home");
  res.send("<h1>Homepage</h1>");
});

//! Handling the / middleware last makes it run only for the / scenario and not for all other midlewares

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
