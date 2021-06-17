const express = require('express');
const auth = require('../middlewares/auth.mdw');
const ticketModel = require('../models/ticket.model');
const router = express.Router();

router.get('/buy-ticket-page',auth, async function(req,res){
    res.render('vwMovie/buyTicketPage')
});

router.post('/buy-ticket-page', async function(req,res){
    var widthPos = req.body.widthPos;
    var heightPos = req.body.heightPos;

    //kiem tra ton tai
    if(widthPos == NULL || heightPos == NULL){
        return res.render('vwMovie/buyTicketPage',{
            err: 'Invalid postion.'
        }) 
    }


    //kiem tra trung
    var flags = ticketModel.singleByPos(widthPos,heightPos);

    if(flags != NULL){
        return res.render('vwMovie/buyTicketPage',{
            err: 'Invalid postion.'
        }) 
    }

    await ticketModel.bookTicket(widthPos,heightPos);
    res.render('vwMovie/buyTicketPage');
});

router.get('/detail-movie', async function(req,res){
    res.render('vwMovie/detailMovie')
});

router.get('/search-movie', async function(req,res){
    res.render('vwMovie/searchMovie')
});




module.exports = router;


