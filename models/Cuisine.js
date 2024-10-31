//took original shell of code from plants lab

const mongoose = require('mongoose');
const  { Schema } = require('mongoose')

const cuisineSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    region: { type: String },
    isVegan: { type: Boolean, default: false },
    isGlutenFree: { type: Boolean, default: false },
    isKosher: { type: Boolean, default: false },
    isHalal: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Cuisine', cuisineSchema);

// went the extra mile with kosher/gluten free/halal etc...