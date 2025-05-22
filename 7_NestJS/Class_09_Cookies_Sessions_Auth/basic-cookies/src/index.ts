import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.post("/create-cookie", (req, res) => {
  //Classic way of creating cookies
  res.set("Set-Cookie", "header-cookie=header-value");

  //Express way of handling cookies
  res.cookie("express-cookie", "dark-theme", {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    secure: false,
  });

  res.json({ msg: "cookies created" });
});

app.get("/read-cookie", (req, res) => {
  console.log(req.headers.cookie);

  console.log("this is from the cookie parser", req.cookies);

  res.json({ msg: "read cookies", cookies: req.cookies });
});

app.listen(3000, () => {
  console.log("server is up at port 3000");
});
