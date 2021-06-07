const express = require('express');
const auth = require('../middlewares/auth.mdw')
const router = express.Router();

router.get('/buy-ticket-page',auth, async function(req,res){
    res.render('vwMovie/buyTicketPage')
});

router.get('/detail-movie', async function(req,res){
    res.render('vwMovie/detailMovie')
});

router.get('/search-movie', async function(req,res){
    res.render('vwMovie/searchMovie')
});




module.exports = router;


