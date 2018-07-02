const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res) => {
    User.find({}, (err, all) => {
        defaultCallback(res, err, all);
    });
});

router.post('/users', (req, res) => {
    User.create(req.body, (err, created) => {
        defaultCallback(res, err, created);
    });
});

router.put('/users', (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, { new: false }, (err, updated) => {
        defaultCallback(res, err, req.body);
    });
});

router.delete('/users', (req, res) => {
    User.remove({ _id: req.body._id }, (err, deleted) => {
        defaultCallback(res, err, deleted);
    });
});

function defaultCallback(res, error, result) {
    if (error)
        return res.status(500).send(error);

    return res.send(result);
}

module.exports = router;