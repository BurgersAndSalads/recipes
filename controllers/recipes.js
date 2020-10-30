const recipeD = require('../models/recipes');

// ---------- Landing page rendering
function index(req, res) {
        res.render('landing');
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
        res.redirect('/all')
    })
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

//------------ DELETE a comment
function commentDelete(req, res) {
    recipeD.findById(req.params.id, function(err, recipe) {
        recipe.comments[0].remove();
        recipe.save(function(err) {
        res.redirect(`/recipe/${recipe._id}`);
      });
    });
}

//----------- DELETE a recipe
function recipeDelete(req, res) {
    recipeD.findById(req.params.id, function(err, recipe) {
        recipe.remove();
        res.redirect('/all');
    })
}

//----------- EDIT a recipe
function recipeEdit(req, res) {
    recipeD.findById(req.params.id, function(err, recipe) {
        res.send('<h1>COMING SOON</h1>');
    })
}

module.exports = {
    view,
    all,
    new: newRecipe,
    create,
    index,
    comment,
    commentDelete,
    recipeEdit,
    recipeDelete
};