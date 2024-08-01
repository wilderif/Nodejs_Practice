const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product.ejs", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  res.render("shop.ejs", {
    products,
    pageTitle: "Shop",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    productsCSS: true,
  });
};
