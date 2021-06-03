const express = require('express');
var bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const router = express.Router();

router.get('/login', async function(req,res){
    res.render('vwAccount/login')
});

router.get('/register', async function(req,res){
    res.render('vwAccount/register')
});


router.post('/register', async function(req, res){
    const hashPass = bcrypt.hashSync(req.body.password, 8);
    const entity = {
        email : req.body.email,
        hashPass,
        phone : req.body.phone,
        role: 1,
    }
    console.log(entity);
    await userModel.add(entity);
    // alert('call');
    res.render('/home')

});

module.exports = router;


