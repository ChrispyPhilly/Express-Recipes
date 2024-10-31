const mongoose = require('mongoose');
const  { Schema } = require('mongoose')

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    unit: { type: String, enum: ['g', 'kg', 'oz', 'tsp', 'tbsp'], required: true },
});

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cuisine: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine' },
    ingredients: [ingredientSchema],
    instructions: [{ step: { type: String, required: true } }],
    ovenTemperature: { type: Number, required: true, min: 0 }, 
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
