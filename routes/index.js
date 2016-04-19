/*
 * render the home page.
 */
exports.index = function(req, res){

	function loadDBQuery(callback) {
		var initialQuery = 'SELECT * FROM plant';
		db.query(initialQuery, function(err, result) {
			if(err) {
				console.log(err);
			} else {
				//tableDump = result;
				resOptions(result);
			}
		});
	}

	function resOptions(tableDump) {
		console.log(tableDump);
		res.locals = {result: tableDump.length + ' plant results'};
		res.render('index.html');
	}

	loadDBQuery(resOptions);
};