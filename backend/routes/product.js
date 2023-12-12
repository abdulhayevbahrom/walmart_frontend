const { Router } = require("express");
const { pro } = require("../model/products");
const { DB } = require("../model/userModel");
const { productValidation } = require("../validation/productvalidation");
const product = Router();

// get product
product.get("/allproducts", async (req, res) => {
  let pros = await pro.find();
  if (!pros.length) {
    return res.send({ msg: "products not found", innerData: pros });
  }
  res.send({ msg: "products are found ", innerData: pros });
});

// create product
product.post("/create", [productValidation], async (req, res) => {
  let newpro = req.body;
  let product = await pro.create(newpro);
  let savedpro = await product.save();
  res.send(savedpro);
});
// delete product
product.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  let deletedpro = await pro.findByIdAndDelete(id);
  if (!deletedpro) {
    return res.send({ msg: "product is not found", innerData: deletedpro });
  }
  res.send({ msg: "product is deleted", innerData: deletedpro });
});

// update product
product.put("/update/:id", async (req, res) => {
  let { id } = req.params;
  let updatedpro = req.body;
  let updatePro = await pro.findByIdAndUpdate(id, updatedpro);
  if (!updatePro) {
    return res.send({ msg: "product is not found", innerData: updatePro });
  }
  res.send({ msg: "product is updated ", innerData: updatePro });
});

// product.get("/search", async (req, res) => {
//   let { name } = req.query;
//   let products = await DB.find();
//   let response = products.filter((p) =>
//     p.name.toLowerCase().includes(name.toLowerCase)
//   );
//   res.send(response);
// });

product.get("/search", async (req, res) => {
  let { max, min } = req.query;
  let products = await DB.find();
  let response = products.filter((p) => {
    p.price <= +max && p.price >= +min;
  });
  res.send(response);
});

module.exports = { product };
