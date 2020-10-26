const express = require('express');
const router = express.Router();
const recipesC = require('../controllers/recipes');


// submission form page
router.get('/new', recipesC.new);
router.post('/new', recipesC.create);

//-----------------------

/* GET home page. */
router.get('/', recipesC.index);

//--------------------------------
// GET all recipes
router.get('/all', recipesC.all);

//-------------
// GET specific recipe
router.get('/:id', recipesC.view);

module.exports = router;