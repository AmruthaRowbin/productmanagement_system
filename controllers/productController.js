const Product = require('../models/Product');
const mongoose = require('mongoose');

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
    const { subCategoryId } = req.query;
    console.log("Subcategory ID:", subCategoryId);

    // Build the query object
    let query = {};

    // If subCategoryId is provided, filter by that subcategory
    if (subCategoryId) {
      query.subCategoryId = subCategoryId;  // Correct field name based on your collection
    }

    // Find products with optional subcategory filter
    const products = await Product.find(query)
      .populate('category');  // If you want to populate the category field

    console.log("Found Products:", products);
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
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