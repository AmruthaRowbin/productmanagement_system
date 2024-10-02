const Category = require('../models/category');

// Add Category
exports.addCategory = async (req, res) => {
  const { name, subcategories } = req.body;
  console.log(name,"ooooooooooooooooooo")
  try {
    const category = new Category({ name, subcategories });
    console.log(category,"kkkkkkkkkkkkkkkk")
    await category.save();
    res.status(201).json({ message: 'Category added', category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('subcategories'); // This will populate the subcategories
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
