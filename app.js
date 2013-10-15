
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var fs = require('fs')

// app.get - renders html file on /form page.

app.get('/form', function(req, res){
	fs.readFile(__dirname+'/index.html', function(err,data){
		res.setHeader('Content-type', 'text/html');
		res.send(data)
	})
});

//

app.post('/signup', function(req, res){
	console.log(req.body)
	if (req.body.email && req.body.pass){
		res.send({success: 'Woohoo!!Success!'})
	}
	else{
		res.send({error: 'Please enter your info dummy.'})
	}
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
