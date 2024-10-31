const express = require('express');
const db = require('./db'); //kept messing up with the mongo connection
//at one point it worked and I tried a few different methods on line 2
const bodyParser = require('body-parser');
const recipeController = require('./controllers/recipeController');

const app = express();
const PORT = process.env.PORT || 5500;


app.use(bodyParser.json());

app.post('/api/cuisines', recipeController.createCuisine);
app.get('/api/cuisines', recipeController.getCuisines);

app.post('/api/recipes', recipeController.createRecipe);
app.get('/api/recipes', recipeController.getRecipes);
app.put('/api/recipes/:id', recipeController.updateRecipe);
app.delete('/api/recipes/:id', recipeController.deleteRecipe);

app.post('/api/directions', recipeController.createDirection);
app.get('/api/directions/:recipeId', recipeController.getDirections);
app.put('/api/directions/:id', recipeController.updateDirection);
app.delete('/api/directions/:id', recipeController.deleteDirection);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});