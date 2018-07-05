const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view-user.html'));
});

router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view-project.html'));
});

module.exports = router;