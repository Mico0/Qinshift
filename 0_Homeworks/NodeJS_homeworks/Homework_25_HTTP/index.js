import http from "node:http";
import { URL } from "node:url";
import logText from "./logger.js";
import { EventEmitter } from "node:events";

const emitter = new EventEmitter();
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/") {
    res.writeHead(200, "Request OK", { "content-type": "text/html" });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Response</title>
    <style>
        body{
            width:800px;
            margin:0 auto;
            background-color: blanchedalmond;
            color:crimson;
            text-align:center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    </style>
</head>
<body>
    <h1>Welcome to the server homepage</h1>
    <h4>Here we will be testing different types of server responses</h4>
    <br><br>
    <h4>What is your next destination?</h4>
    <ul>
        <li><a href="./">Home</a></li>
        <li><a href="/student">Student</a></li>
    </ul>
</body>
</html>
        `);
  } else if (url.pathname === "/student") {
    const student = {
      Student_Name: "Milan",
      Student_Lastname: "Ognjanoski",
      Academy: "Web Programming",
      Subject: "Basic - Node.js",
    };
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Response</title>
    <style>
        body{
            width:800px;
            margin:0 auto;
            background-color: blanchedalmond;
            color:crimson;
            text-align:center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    </style>
</head>
<body>
    <h1>Welcome to the server student page</h1>
    <h4>Here's our honorary student:</h4>
            <h4>${student.Student_Name}</h4>
        <h4>${student.Student_Lastname}</h4>
        <h4>${student.Academy}</h4>
        <h4>${student.Subject}</h4>
    <br><br>
    <h4>What is your next destination?</h4>
    <ul>
        <li><a href="./">Home</a></li>
    </ul>
</body>
</html>`);
  } else if (req.url === "/add_student" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
        <style>
        body{
            width:800px;
            margin:0 auto;
            background-color: blanchedalmond;
            color:crimson;
            text-align:center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    </style>
  </head>
  <body>
    <form action="./all_students" method="POST">
      <label for="name">Students Name:</label>
      <input
        placeholder="Enter the students name"
        type="text"
        name="name"
        id="name"
      />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
        
        `);
  } else if (url.pathname === "/all_students" && req.method === "POST") {
    // console.log(url.pathname);
    // console.log(url.searchParams);
    const name = url.searchParams.get("name") || "Guest";
    let body = "";
    emitter.on("studentAdded", () => {
      req.on("data", (chunk) => {
        console.log(chunk);
        body += chunk.toString();
        console.log(body);
      });
      req.on("end", () => {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(logText(body));
      });
    });
    emitter.emit("studentAdded");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Response</title>
    <style>
        body{
            width:800px;
            margin:0 auto;
            background-color: blanchedalmond;
            color:crimson;
            text-align:center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
    </style>
</head>
<body>
<h1>Whoopsie...</h1>
<h2>404 Page not found</h2>
</body>
</html>    
        
        `);
  }
});

server.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});
