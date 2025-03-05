import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    const users = [
      {
        id: 1,
        name: "Milan",
      },
      {
        id: 2,
        name: "Bob",
      },
    ];
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(400, { "content-type": "application/json" });
    res.end("Error page not found");
  }
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
