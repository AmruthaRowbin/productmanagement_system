const express = require('express');
const { addCategory, getCategories } = require('../controllers/categoryController');
const router = express.Router();

router.post('/addcategory', addCategory);
router.get('/getcategory', getCategories);

module.exports = router;
