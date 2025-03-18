import express from "express";
import path from "path";
import { dirname as rootDir } from "../helpers/path.js";

const router = express.Router();

console.log(rootDir);

router.get("/add-product", (req, res, next) => {
  //   console.log("In in the product middleware!");
  //   res.send(`
  //   <form action="/admin/product" method="post">
  //       <input type="text" name="title">
  //       <button type="submit">Add product</button>
  //   </form>
  //       `);
  res.sendFile(path.join(rootDir, "../", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
//! We can use the same path for a route if the methods differ

export { router };
