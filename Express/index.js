const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
