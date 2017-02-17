/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var like = require('./routes/like');
var signup = require('./routes/signup');
var main = require('./routes/main');
<<<<<<< HEAD
=======
var closet = require('./routes/closet');
>>>>>>> 055c855333492368d209e6df52341a00362b60b9
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/like', like.view);
app.get('/signup', signup.view);
app.get('/main', main.view);
<<<<<<< HEAD
=======
app.get('/closet', closet.view);
>>>>>>> 055c855333492368d209e6df52341a00362b60b9

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
