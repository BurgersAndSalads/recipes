var express = require('express');
var router = express.Router();
const indexC = require('../controllers/index')

/* GET users listing. */
router.get('/', indexC.all);

module.exports = router;
