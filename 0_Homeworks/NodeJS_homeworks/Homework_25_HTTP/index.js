import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
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
  } else if (req.url === "/student") {
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
</html>    
    
    `);
  }
});

server.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});
