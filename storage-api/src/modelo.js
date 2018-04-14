//Programa encargado de realizar un schema Flows para guardar en la BD Mongo.
const mongoose = require('mongoose');

var schema = mongoose.Schema(
    {id: String},
    {strict: false}
)

var model = mongoose.model('flows' ,schema);

module.exports = model;