var http = require('http');
var path = require('path');
const bodyParser = require('body-parser');
var express = require("express");
var listener = require('./mqtt.js');

// Create an Express app
var app = express();
app.use(bodyParser.json());

// set host and port.
app.set('host', "http://localhost");
app.set('port', 8400);

// listening application.
app.listen(app.get('port'), () => {
    console.log('[*] - Listener en %s:%s', app.get('host'), app.get('port'));
});