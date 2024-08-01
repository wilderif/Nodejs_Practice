const path = require("path");

const express = require("express");

// const rootDir = require("../util/path.js");
const productsController = require("../controllers/products.js");

const router = express.Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

module.exports.routes = router;
