//Utiliza las distintas funciones para realizar pruebas entre NodeJS y MongoDB
const express = require('express');
const modelo = require('./modelo');

var router = express.Router();

//Prueba del servidor Node (Usado en Punto 9)
router.get('/hello', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // print out Hello 
    res.end('Hola Punto 10\n');
})

// get flows from database.
router.get('/getFlows', (req, res) => {
    res.send({ data: " Get" });
    console.log('Ingresa a GetFlows');
});

//save flows in database
router.post('/saveFlows', (req, res) => {

    modelo.create(req.body, function (error, saved) {
        res.send({ data: " Save" });
        console.log('Guardo Flows');
    })

});

module.exports = router;