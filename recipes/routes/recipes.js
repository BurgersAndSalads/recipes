const express = require('express');
const router = express.Router();
const recipesC = require('../controllers/recipes');


// submission form page
router.get('/new', recipesC.new);
router.post('/all', recipesC.create);

//-----------------------

/* GET home page. */
router.get('/', recipesC.index);

//--------------------------------
// GET all recipes
router.get('/all', recipesC.all);

//-------------
// GET specific recipe
router.get('/recipe/:id', recipesC.view);

//--------------------
// POST a comment
router.post('/recipe/:id/comment', recipesC.comment);

module.exports = router;