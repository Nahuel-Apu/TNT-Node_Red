const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/svg', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/mqtt.html'));
});

module.exports = router;