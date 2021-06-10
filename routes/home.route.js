const express = require('express');
const homeModel = require('../models/home.model');
const router = express.Router();

router.get('/', async function (req, res) {
        const list= await homeModel.triple();
        console.log(list);
        res.render('home', {
                list: list,
        });
});

router.get('/about', async function (req, res) {
        res.render('vwInfo/about');
});

router.get('/contacts', async function (req, res) {
        res.render('vwInfo/contacts');
});

module.exports = router;