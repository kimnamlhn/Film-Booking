const express = require('express');
const router = express.Router();

router.get('/profile', async function(req,res){
    res.render('vwUser/profile')
});
router.get('/ticket-booked', async function(req,res){
    res.render('vwUser/ticketBooked')
});
router.get('/ticket-history', async function(req,res){
    res.render('vwUser/ticketHistory')
});



module.exports = router;


