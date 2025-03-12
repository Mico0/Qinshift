import express from "express";
//! import routes
import router from "./routes/products.routes.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || "localhost";

app.use("/api/products", router);

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});
