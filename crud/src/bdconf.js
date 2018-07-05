//Programa que realiza la conexion con la imagen de la BD Mongo.
const mongoose = require('mongoose');

// wait a certain time.
async function wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    });
}

// start the connection to mongodb.
async function connect() {
    await wait();
    var connection = mongoose.connect('mongodb://mongodb/tnt');

    mongoose.connection.on('connected', () => {
        console.log('[Mongoose] - conectado en:', 'mongodb://mongodb/tnt');
        return connection;
    });

    mongoose.connection.on('error', (err) => {
        console.log('[Mongoose] - error de conexion:', err);
        process.exit(1);
    });
}

module.exports = connect(); 