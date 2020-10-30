const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
});

const ingredientSchema = new mongoose.Schema({
    content: String
})

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    instruction: String,
    ingredientsNum: String,
    likes: {
        type: Number,
        default: 0
    },        
    comments: [commentSchema],
    image: String
})


module.exports = mongoose.model('Recipe', recipeSchema);