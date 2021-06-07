const express = require('express');
const  auth = require('../middlewares/auth.mdw')
const router = express.Router();

router.get('/profile', auth, async function(req,res){
    res.render('vwUser/profile')
});
router.get('/ticket-booked', auth, async function(req,res){
    res.render('vwUser/ticketBooked')
});
router.get('/ticket-history', auth, async function(req,res){
    res.render('vwUser/ticketHistory')
});



module.exports = router;


