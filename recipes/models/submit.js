const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredientsNum: [String],
    likes: {
        type: Number,
        default: 0
    },        
    comments: [String]
})


module.exports = mongoose.model('Recipe', recipeSchema);