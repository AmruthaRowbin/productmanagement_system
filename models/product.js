const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  variants: [{
    ram: { type: String, required: true },
    price: { type: Number, required: true },
  }],
  subCategoryId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'SubCategory', // Ensure this matches the name of your SubCategory model
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
