const Product = require('../models/Product');

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const { name, category, price, variants, subCategoryId } = req.body;

    // Create the new product
    const product = new Product({
      name,
      category,
      price,
      variants,
      subCategoryId // Add subCategoryId here
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Edit Product
exports.editProduct = async (req, res) => {
  const { id } = req.params; // Get the product ID from the URL parameters
  const { name, category, price, variants } = req.body; // Extract fields to update

  try {
    // Find the product by ID and update it
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, category, price, variants },
      { new: true, runValidators: true } // Options: return the updated document and validate
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};