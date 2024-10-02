const Wishlist = require('../models/wishlist');

// Add Product to Wishlist
exports.addToWishlist =  async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Find or create the wishlist for the user
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, products: [] });
    }

    // Add the product to the wishlist if not already present
    if (!wishlist.products.some(product => product.productId.equals(productId))) {
      wishlist.products.push({ productId });
      await wishlist.save();
      return res.status(201).json({ message: 'Product added to wishlist', wishlist });
    } else {
      return res.status(400).json({ message: 'Product already in wishlist' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get Wishlist
exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('products');
    res.status(200).json({ wishlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
