const mongoose = require('mongoose');
const  { Schema } = require('mongoose')

const directionSchema = new mongoose.Schema({
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
    step: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Direction', directionSchema);
