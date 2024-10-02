const SubCategory = require('../models/subcategory');
const Category = require('../models/category');

// Add Sub-Category
exports.addSubCategory = async (req, res) => {
  const { name, categoryId } = req.body; 

  try {
    // Check if the category exists
    const categoryExists = await Category.findById(categoryId);
    if (!categoryExists) {
      return res.status(400).json({ message: 'Category does not exist' });
    }

    // Create the new subcategory
    const subCategory = new SubCategory({ name, categoryId });
    await subCategory.save();

    // Update the category to include this new subcategory
    await Category.findByIdAndUpdate(categoryId, { $push: { subcategories: subCategory._id } });

    res.status(201).json({ message: 'SubCategory added successfully', subCategory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Sub-Categories
exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('categoryId', 'name');
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
