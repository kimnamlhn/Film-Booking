module.exports = function(app) {
    app.use('/', require('../routes/home.route'));
    app.use('/account', require('../routes/account.route'));
    app.use('/admin', require('../routes/admin.route'));
    app.use('/user', require('../routes/user.route'));
    app.use('/movie', require('../routes/movie.route'));


}