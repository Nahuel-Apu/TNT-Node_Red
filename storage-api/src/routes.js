//Utiliza las distintas funciones para realizar pruebas entre NodeJS y MongoDB
const express = require('express');
//const modelo = require('./modelo');
const connection = require('mongoose').connection;
var router = express.Router();

/* // get flows from database.
router.get('/getFlows', (req, res) => {
    modelo.find({},{}, {sort: {'version': -1}},function(error,flows){
        console.log('Traigo los Flows')
        res.send(flows)        
    })
    console.log('Ingresa a GetFlows');
});

//save flows in database
router.post('/saveFlows', (req, res) => {

    modelo.create(req.body, function (error, saved) {
        res.send({ data: " Save" });
        console.log('Guardo Flows');
    })

}); */

// service information path.
router.get('/info', (req, res) => {
    let info = { name: "storage api", version: "1.0", date: "april 2018" };
    defaultCallback(res, false, info);
});

// get the last saved flows.
router.get('/getFlows/:collection', (req, res) => {
    connection.db.collection(req.params.collection, (err, collection) => {
        collection.find({}).sort({ version: -1 }).limit(1).toArray((err, data) => {
            defaultCallback(res, err, data);
        });
    });
});

// save all flows in database.
router.post('/saveFlows/:collection', (req, res) => {
    connection.db.collection(req.params.collection, (err, collection) => {
        collection.insert(req.body, (err, data) => {
            defaultCallback(res, err, data);
        });
    });
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(500).send({ error: error });

    return res.send(result);
}

module.exports = router;