module.exports = function(app) {
    app.use('/', require('../routes/home.route'));
    app.use('/user', require('../routes/login.route'));


}