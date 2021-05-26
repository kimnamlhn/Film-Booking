const express = require('express');
const router = express.Router();



router.get('/movie_manage', async function (req, res) {
        res.render('vwAdmin/movie_manage');
});


module.exports = router;