var http = require('http');
var path = require('path');
const bodyParser = require('body-parser');
var express = require("express");

// Create an Express app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get views.
const views = require('./routes/crud');
app.use(process.env.PREFIX, views);

app.use(express.static(path.join(__dirname, 'public')));

// set host and port.
app.set('host', "http://localhost");
app.set('port', 8190);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Dibujo SVG (Por Ahora) en %s:%s', app.get('host'), app.get('port'));
});