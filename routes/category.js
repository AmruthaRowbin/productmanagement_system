const express = require('express');
const { addCategory, getCategories } = require('../controllers/categoryController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.post('/addcategory',protect, addCategory);
router.get('/getcategory', protect,getCategories);

module.exports = router;
