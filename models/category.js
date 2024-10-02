const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }] // Reference to SubCategory
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
