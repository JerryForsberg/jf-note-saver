const express = require('express');

const path = require('path');
const router = express.Router();

router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/notes.html'));
});

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;