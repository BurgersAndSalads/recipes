const recipeD = require('../models/recipes');

// ---------- Landing page rendering
function index(req, res) {
    // recipeD.find({}, function(err, recipes) {
        // console.log('this is line 6')
        res.render('landing', {title: 'Recipes'/*, recipes*/});
    // })
};

// ----------- list out all the recipes
function all(req, res) {
    recipeD.find({}, function(err, recipes) {
        // console.log(recipes)
        res.render('index', {recipes});
    })
};

// ---------- look at the details of a selected recipe
function view(req, res) {
    console.log("this is line 20")
    recipeD.findById(req.params.id, function(err, recipe) {
        // console.log(recipe + "123123")
        res.render('details', {title: recipe.name, recipe})
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

//----------- POST a comment
function comment(req, res) {
    recipeD.findById(req.params.id, function(err, recipe) {
        recipe.comments.push(req.body);
        recipe.save(function(err) {
          res.redirect(`/recipe/${recipe._id}`);
        });
    });
}

module.exports = {
    view,
    all,
    new: newRecipe,
    create,
    index,
    comment
};