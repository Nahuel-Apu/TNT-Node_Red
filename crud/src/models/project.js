// define the project schema.
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    project_name: { type: String, required: true },
    prefix: { type: String, required: true },
    collectionName: { type: String },
    created_at: { type: Date, default: new Date }
});

let Project = mongoose.model('project', schema);

module.exports = Project;