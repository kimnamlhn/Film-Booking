const express = require('express');
const  auth = require('../middlewares/auth.mdw')
const router = express.Router();
const ticketModel = require('../models/ticket.model')

router.get('/profile', auth, async function(req,res){
    const user = req.session.authUser;
    if(typeof(user) === 'undefined'){
        console.log('fail to get user')
    }

    res.render('vwUser/profile', {
        user : user,
    })
});

router.get('/ticket-booked', auth, async function(req,res){
    const idUser = req.session.authUser.idUser;

    if(typeof(idUser) === 'undefined'){
        console.log('fail to get id user')
    }

    
    const tickets = await ticketModel.listByidUser(idUser);
    //debuging
    console.log(idUser);
    console.log(tickets);

    res.render('vwUser/ticketBooked', {
        list: tickets,
    })


});
router.get('/ticket-history', auth, async function(req,res){

    const idUser = req.session.authUser.idUser;

    if(typeof(idUser) === 'undefined'){
        console.log('fail to get id user')
    }

    
    const tickets = await ticketModel.listByidUser(idUser);
    //debuging
    console.log(idUser);
    console.log(tickets);

    res.render('vwUser/ticketHistory', {
        list: tickets,
    })
});



module.exports = router;


