const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product.ejs", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
