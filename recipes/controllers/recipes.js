const recipeD = require('../models/recipes');

// ---------- Landing page rendering
function index(req, res) {
    recipeD.find({}, function(err, recipes) {
        res.render('landing', {title: 'Recipes', recipes});
    })
};

// ----------- list out all the recipes
function all(req, res) {
    recipeD.find({}, function(err, recipes) {
        res.render('index', {recipes});
    })
};

// ---------- look at the details of a selected recipe
function view(req, res) {
    recipeD.findById(req.params.id, function(err, recipe) {
        // if(err) {
        //     res.send(err);
        // } else {
            res.render('details', {title: recipe.name, recipe})
            // res.send(`${recipe._id}`);
        // }
    });
}

// ----------- create a new recipe page
function newRecipe(req, res) {
    res.render('submit');
};

// ------------ POST request after sumitting a new recipe
function create(req, res) {
    const recipe = new recipeD(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect('/new');
        res.redirect('/all')
    })
    // res.send('create recipe');
};



module.exports = {
    view,
    all,
    new: newRecipe,
    create,
    index
};