// define the user schema.
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    superuser: { type: Boolean, default: false },
    access: { type: String, enum: ["r", "w", "rw"], default: "r" }
});

let User = mongoose.model('user', schema);

module.exports = User;