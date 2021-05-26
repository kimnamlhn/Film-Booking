const express = require('express');
const router = express.Router();



router.get('/movie_manage', async function (req, res) {
        res.render('vwAdmin/movie_manage');
});
router.get('/cinema_manage', async function (req, res) {
        res.render('vwAdmin/cinema_manage');
});
router.get('/cineplex_manage', async function (req, res) {
        res.render('vwAdmin/cineplex_manage');
});
router.get('/showtime_manage', async function (req, res) {
        res.render('vwAdmin/showtime_manage');
});
router.get('/statistical_manage', async function (req, res) {
        res.render('vwAdmin/statistical_manage');
});


module.exports = router;