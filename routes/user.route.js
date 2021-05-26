const express = require('express');
const router = express.Router();

router.get('/profile', async function(req,res){
    res.render('vwUser/profile')
});



module.exports = router;


