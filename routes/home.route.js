const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
        res.render('home');
});

router.get('/about', function (req, res) {
        res.render('vwInfo/about');
});

router.get('/contacts', function (req, res) {
        res.render('vwInfo/contacts');
});

module.exports = router;