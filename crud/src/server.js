var http = require('http');
var path = require('path');
const bodyParser = require('body-parser');
var express = require("express");
var conexion = require('./bdconf.js');

// Create an Express app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add a simple route for static content served from 'public'
//app.use("/",express.static("public"));

app.use(express.static(path.join(__dirname, 'public')));

// get views.
const views = require('./routes/crud');
app.use('/public', views);

// define all users api routes.
const users = require('./routes/crud-user');
app.use('/api', users);

// set host and port.
app.set('host', "http://localhost");
app.set('port', 8090);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - CRUD de Usuarios (Por Ahora) en %s:%s', app.get('host'), app.get('port'));
});