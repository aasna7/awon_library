
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var path = require('body-parser');
var path = require('path');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'forumlogin'

});
var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());