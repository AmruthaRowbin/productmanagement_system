const express = require('express');

const { addSubCategory, getSubCategories } = require('../controllers/subCategoryController');
const router = express.Router();
// Add Sub-Category
router.post('/addsubcat', addSubCategory);

// Get All Sub-Categories
router.get('/getsubcat', getSubCategories);

module.exports = router;
