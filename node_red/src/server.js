var http = require('http');
var path = require('path');
var express = require("express");
var RED = require("node-red");

// Create an Express app
var app = express();
var router = express.Router();

// Add a simple route for static content served from 'public'
//app.use("/",express.static("public"));

app.use('/nodered', express.static(path.join(__dirname, 'public')));

// serve static files
router.get('/nodered/server', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/mqtt.html'));
});

// Post autenticacion de Mosquitto
router.post('/auth', (req, res) => {
    res.status(200).send("OK");
});

// Post autenticacion superuser de Mosquitto 
router.post('/superuser', (req, res) => {
    res.status(200).send("OK");
});

// // Post autenticacion ACL de Mosquitto
router.post('/acl', (req, res) => {
    res.status(200).send("OK");
});

app.use(router);

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    //httpAdminRoot:"/nodered",
    //httpRoot: '/nodered',
    httpAdminRoot:process.env.prefix,
    httpRoot: process.env.prefix,
    httpNodeRoot: "/api",
    userDir:"/data",
    storageModule: require("./flows"),
    functionGlobalContext: { }    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(8088);

// Start the runtime
RED.start();