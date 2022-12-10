const express = require("express");
const router = express.Router();
const productData = require("../data/product.json");
const { logData } = require("../middlewares/logger");
const {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");

router.get("/", [logData], returnAllProducts),
  router.get("/:productID", returnSingleProduct),
  router.post("/", createProduct),
  router.patch("/:productID", updateProduct),
  router.delete("/:productID", deleteProduct),
  (module.exports = router);
