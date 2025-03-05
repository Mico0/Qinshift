import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello world");
  //! end is a method that gets executed last when the request ends
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
