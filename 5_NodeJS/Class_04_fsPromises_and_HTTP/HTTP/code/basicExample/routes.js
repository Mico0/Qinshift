import fs from "fs";

function requestHandler(req, res) {
  const url = req.url; //! parsing the url from the request
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(`<head><itle>Sending a response</title></head>`);
    res.write(`
            <form action="/message" method="POST">
              <input type="text" name="text" id="text">
              <button type="submit">Submit</button>
            </form>
            `);
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("messag.txt", message, (err) => {
        res.writeHead(302, { location: "/" }); //! Allows us to write us to write meta information on the go
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write(`<head><itle>Sending a response</title></head>`);
  res.write(`<body><h1>Sending data in chunks with res.write()</h1></body>`);
  res.write("</html>");
}

export { requestHandler };
