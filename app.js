/*
var express = require("express");

var app= express();
app.use(express.static('public'));
app.use(express.static('assets'));

app.set("view engine","jade");



app.get("/login",function(req,res){
	res.render("login");
});

app.get('/', function(req,res) {
  res.render("default");
});

app.get('/fluid', function(req,res) { res.render("layouts/fluid")});
app.get('/hero', function(req,res) { res.render("layouts/hero")});
app.get('/marketing', function(req,res) { res.render("layouts/marketing-alternate")});
app.get('/narrow', function(req,res) { res.render("layouts/marketing-narrow")});
app.get('/signin', function(req,res) { res.render("layouts/signin")});
app.get('/starter', function(req,res) { res.render("layouts/starter-template")});
app.get('/sticky', function(req,res) { res.render("layouts/sticky-footer")});

app.listen(8090);*/


var http = require('http');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 9080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get("/login",function(req,res){
  res.render("login");
});

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
