var http = require('http');
var path = require('path');
const bodyParser = require('body-parser');
var express = require("express");
var conexion = require('./bdconf.js');

// Create an Express app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get views.
const views = require('./routes/crud');
app.use(process.env.PREFIX, views);

// define all users api routes.
const users = require('./routes/crud-user');
app.use(process.env.PREFIX + '/api', users);

// define all proyects api routes.
const projects = require('./routes/crud-project');
app.use(process.env.PREFIX + '/api', projects);

app.use(express.static(path.join(__dirname, 'public')));

// set host and port.
app.set('host', "http://localhost");
app.set('port', 8090);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - CRUD de Usuarios y Proyectos (Por Ahora) en %s:%s', app.get('host'), app.get('port'));
});