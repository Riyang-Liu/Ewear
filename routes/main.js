
// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res) {
	// var data = req.params.data;
	console.log(data);
	res.render('main', data);
};

