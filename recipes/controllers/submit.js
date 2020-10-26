const submitM = require('../models/submit');

function newRecipe(req, res) {
    res.render('submit');
}

function create(req, res) {
    res.send('create recipe');
}

module.exports = {
    new: newRecipe,
    create
}