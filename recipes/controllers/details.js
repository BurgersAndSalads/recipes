const recipeD = require('../models/submit');


function view(req, res) {
    recipeD.findById(req.params.id, function(err, recipe) {
        if(err) {
            res.send(err);
        } else {
            res.redirect(`/${recipe._id}`);
        }
    });
}

module.exports = {
    view
}
