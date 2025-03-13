import http from "http";
import routeHandler from "./routes.js";

const PORT = 3000;
const HOST = "localhost";

const server = http.createServer(routeHandler);

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
