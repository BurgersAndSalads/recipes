const indexM = require('../models/index')

function all(req, res) {
    res.render('index');
}

module.exports = {
    all
}