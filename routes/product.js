const express = require('express');
const router = express.Router();
const { addProduct, getProducts ,editProduct} = require('../controllers/productController');

// Add Product Route
router.post('/addproduct', addProduct);

// Get All Products Route
router.get('/getproduct', getProducts);

router.put('/:id', editProduct);

module.exports = router;
