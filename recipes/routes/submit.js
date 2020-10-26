const express = require('express');
const router = express.Router();
const submitC = require('../controllers/submit');

router.get('/', submitC.new);
router.post('/', submitC.create);

module.exports = router;