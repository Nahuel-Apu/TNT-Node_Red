//Programa que realiza la conexion con la imagen mongo.
const mongoose = require('mongoose');

//Conexion a imagen de Docker
//var conector = mongoose.connect('mongodb://mongo/nombres');

//Conexion a localhost
var conector = mongoose.connect('mongodb://localhost/flows');

mongoose.connection.on('connected',()=>{
    console.log('Se conecto a la BD')
})

mongoose.connection.on('error',(error)=>{
    console.log('Error a la conexion a la BD', error)
})

module.exports = conector; 