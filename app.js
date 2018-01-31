var express = require("express");

var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app= express();

app.set('port', process.env.PORT || 8090);
app.set("views",path.join(__dirname, 'views'));
app.set("view engine","jade");

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'assets')));
app.use(app.router);
app.use(express.bodyParse());

if('development' == app.get('env')){
	app.use(express.errorHandler());
}

require('./routes')(app);
http.createServer(app).listen(app.get('port'),function(){
	console.log('Express server listening on port '+ app.get('port'));
});