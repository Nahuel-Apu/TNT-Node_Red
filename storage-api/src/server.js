//
const express = require('express');
const bodyparser = require('body-parser');
const bdconx = require ('./bdcon.js');
const router = require('./routes');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(router);

app.listen(8080, () => {
    console.log('Server running on port 8080');
})