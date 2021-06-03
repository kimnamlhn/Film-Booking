const express = require('express');
const router = express.Router();

router.get('/buy-ticket-page', async function(req,res){
    res.render('vwMovie/buyTicketPage')
});

router.get('/detail-movie', async function(req,res){
    res.render('vwMovie/detailMovie')
});

router.get('/search-movie', async function(req,res){
    res.render('vwMovie/searchMovie')
});




module.exports = router;


