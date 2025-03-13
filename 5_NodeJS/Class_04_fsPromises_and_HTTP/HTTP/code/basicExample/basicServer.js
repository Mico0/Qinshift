import http from "node:http";
import { requestHandler } from "./routes.js";

const server = http.createServer(requestHandler);

//! Is equal to: const server = http.createServer((req, res) => requestHandler(req, res));
//! Since http.createServer() expects a function that takes (req, res), it automatically calls requestHandler(req, res) whenever a new request arrives.

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
