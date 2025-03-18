import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router as adminRoutes } from "./routes/admin.routes.js";
import { router as shopRoutes } from "./routes/shop.routes.js";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Parse JSON payloads
// app.use(express.json());
// Parse URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

//! This is a catch all middleware
//! .use handles all HTTP methods
app.use((req, res, next) => {
  //   res.status(404).send("<h1>404 page not found</h1>");
  res.status(404).sendFile(path.join(dirname, ".", "views", "404.html"));
});

app.listen(3000, "localhost", () => {
  console.log(`Server listening on http://localhost:3000`);
});
// console.log(app);
