const express = require('express');
const { addToWishlist, getWishlist } = require('../controllers/wishlistController');
const router = express.Router();
//const { protect } = require('../middleware/authMiddleware');

router.post('/addwishlist',  addToWishlist);
router.get('/getwishlist', getWishlist);

module.exports = router;
