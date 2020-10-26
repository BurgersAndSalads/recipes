const express = require('express');
const router = express.Router();
const detailsC = require('../controllers/details')

router.get('/', detailsC.view);

module.exports = router;