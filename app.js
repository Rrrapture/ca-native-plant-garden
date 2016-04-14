/**
 * Module dependencies.
 */
require('dotenv').config();
var express = require('express');
var path = require('path');
var db = require('./db');
var routes = require('./routes');
var app = express();


app.use('/', express.static('public'));


app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

/**
*Routes
*/
app.get('/', routes.index);



/**
*Start listening
*/
app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
