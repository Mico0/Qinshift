import fs from "fs";

export default function routeHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = `
    <form action="/create-user" method="POST">
    <label for="user">Enter the user:</label>
    <br>
    <input type="text" name="user" id="user">
    <button type="submit">Submit</button>
    </form>`;
    res.end(html);
  }
  if (url === "/users") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
       <li>User 5</li>
        <li>User 6</li>
      </ul>
      `);
  }
  if (url === "/create-user" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const parsedBody = new URLSearchParams(body);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({ user: `Created user ${parsedBody.get("user")}` })
      );
    });
  }
}
