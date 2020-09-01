const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect(
  'mongodb+srv://Harrison:DesxfiGHKg3FiuwT@cluster0.xmxay.mongodb.net/products_test?retryWrites=true&w=majority'
).then(() => {
  console.log('Connexted to database!')
}).catch(() => {
  console.log('connection failed!')
});

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  console.log(createdProduct);
  const result = await createdProduct.save();
  // console.log(typeof createdProduct.id);
  res.json(result);
};

const getProduct = async (req, res, next) => {
  const products = await Product.find().exec();

  res.json(products)
};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
