const fs = require("fs");
const path = require("path");

const filePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        try {
          products = JSON.parse(fileContent);
        } catch (err) {}
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        try {
          cb(JSON.parse(fileContent));
        } catch (err) {
          cb([]);
        }
      }
    });
  }
};
