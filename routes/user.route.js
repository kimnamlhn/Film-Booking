const express = require('express');
const router = express.Router();

router.get('/login', async function(req,res){
    res.render('vwAccount/login')
});

router.get('/register', async function(req,res){
    res.render('vwAccount/register')
});

module.exports = router;


