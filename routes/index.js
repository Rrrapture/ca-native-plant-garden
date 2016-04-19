/*
 * render the home page.
 */
exports.index = function(req, res){

	function loadDBQuery(callback) {
		var initialQuery = 'SELECT common_name, scientific_name FROM plant';
		db.query(initialQuery, function(err, result) {
			if(err) {
				console.log(err);
			} else {
				resOptions(result);
			}
		});
	}

	function resOptions(tableDump) {
		console.log(tableDump);
		//res.locals = {result: tableDump.length + ' plant results'};
		res.locals = {result: JSON.stringify(tableDump)};
		res.render('index.html');
	}

	loadDBQuery(resOptions);
};