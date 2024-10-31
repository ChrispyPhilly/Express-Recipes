const Cuisine = require('../models/Cuisine');
const Recipe = require('../models/Recipe');
const Direction = require('../models/Direction');

// Start of CRUD functionality. Here we can make a cuisine
exports.createCuisine = async (req, res) => {
    try {
        const cuisine = new Cuisine(req.body);
        await cuisine.save();
        res.status(201).json(cuisine);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getCuisines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find();
        res.json(cuisines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('cuisine');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.createDirection = async (req, res) => {
    try {
        const direction = new Direction(req.body);
        await direction.save();
        res.status(201).json(direction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getDirections = async (req, res) => {
    try {
        const directions = await Direction.find({ recipe: req.params.recipeId });
        res.json(directions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//End of CRUD

//able to fetch recipe by various different ways
exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id).populate('cuisine');
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch recipes by cuisine
exports.getRecipesByCuisine = async (req, res) => {
    try {
        const recipes = await Recipe.find({ cuisine: req.params.cuisineId }).populate('cuisine');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update direction
exports.updateDirection = async (req, res) => {
    try {
        const direction = await Direction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!direction) {
            return res.status(404).json({ message: 'Direction not found' });
        }
        res.json(direction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete direction
exports.deleteDirection = async (req, res) => {
    try {
        const direction = await Direction.findByIdAndDelete(req.params.id);
        if (!direction) {
            return res.status(404).json({ message: 'Direction not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
