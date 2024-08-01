const path = require("path");

const express = require("express");

// const rootDir = require("../util/path.js");
// const adminData = require("./admin.js");
const productsController = require("../controllers/products.js");

const router = express.Router();

router.get("/", productsController.getProduct);

module.exports = router;
