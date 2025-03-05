import http from "node:http";

const server = http.createServer((req, res) => {
  //   console.log(req);
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    //! content-type explains to the browser what type of data it should expect
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to the about us page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Contact us at contact@example.com");
  } else {
    res.writeHead(400, { "content-type": "text/plain" });
    res.end("Error page not found");
  }
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
