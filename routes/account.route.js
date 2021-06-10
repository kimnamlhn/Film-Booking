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
    // const hashPass = await bcrypt.hashSync(req.body.password, 8);
    const entity = {
        idUser: null,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        role: 1,
    }
    console.log(entity);
    await userModel.add(entity);
    // alert('call');
    res.redirect('/login')

});
router.post('/login', async function(req, res){
    var user = await userModel.singleByEmail(req.body.email);
    // console.log(user);
    if(user == null){
        return res.render('vwAccount/login',{
            err: 'Invalid username or password.'
        })
    };
    
    var pass = user.password;
    if(pass != req.body.password){
        return res.render('vwAccount/login',{
            err: 'Invalid username or password.'
        })
    };
    
    delete user.password;
    req.session.authenticated = true;
    req.session.authUser = user;
    console.log(req.session.authUser);
    console.log(req.session.authenticated);

    
    res.redirect('/');

});

router.post('/logout', function(req, res){

    req.session.authenticated = false;
    req.session.authUser = null;
    console.log('1');
    res.redirect('/');

});

module.exports = router;


