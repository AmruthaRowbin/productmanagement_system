const express = require('express');

const { addSubCategory, getSubCategories } = require('../controllers/subCategoryController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
// Add Sub-Category
router.post('/addsubcat', protect ,addSubCategory);

// Get All Sub-Categories
router.get('/getsubcat', protect, getSubCategories);

module.exports = router;
