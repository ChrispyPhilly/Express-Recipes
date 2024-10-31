const mongoose = require('mongoose');
const Cuisine = require('../models/Cuisine');
const Recipe = require('../models/Recipe');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

//used Chat GPT for the boring stuff. Pasta, olive oil, garlic all those ingredients
const seedData = async () => {
    await Cuisine.deleteMany();
    await Recipe.deleteMany();

    const italian = await Cuisine.create({ name: 'Italian', region: 'Italy', isVegan: false });
    const indian = await Cuisine.create({ name: 'Indian', region: 'India', isVegan: true, isGlutenFree: true });

    await Recipe.create({
        name: 'Pasta',
        cuisine: italian._id,
        ingredients: [
            { name: 'Pasta', amount: 200, unit: 'g' },
            { name: 'Olive Oil', amount: 50, unit: 'ml' },
            { name: 'Garlic', amount: 2, unit: 'tsp' }
        ],
        instructions: [{ step: 'Boil water and add pasta.' }, { step: 'In a pan, heat olive oil and sauté garlic.' }],
        ovenTemperature: 180
    });

    await Recipe.create({
        name: 'Curry',
        cuisine: indian._id,
        ingredients: [
            { name: 'Chicken', amount: 300, unit: 'g' },
            { name: 'Curry Powder', amount: 2, unit: 'tbsp' },
            { name: 'Coconut Milk', amount: 400, unit: 'ml' }
        ],
        instructions: [{ step: 'Cook chicken until brown.' }, { step: 'Add curry powder and coconut milk.' }],
        ovenTemperature: 200
    });

    console.log('Data seeded successfully');
    mongoose.connection.close();
};

seedData();
