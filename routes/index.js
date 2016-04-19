/*
 * render the home page.
 */
exports.index = function(req, res){

	var initialQuery = 'SELECT * FROM plant';
	db.query(initialQuery, function(err, result) {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
	res.render('index.html');
};