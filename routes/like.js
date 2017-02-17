
var like = require('../like.json');

exports.view = function(req, res){

	res.json(like);
};

