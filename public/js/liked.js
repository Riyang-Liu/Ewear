
var like = require('../like.json');

exports.view = function(req, res){

	var likes = like;
	res.json(likes);
	
};