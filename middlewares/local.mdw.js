module.exports = function (app) {
    app.use(async function (req, res, next) {
        if (typeof (req.session.authenticated) === 'undefined') {
            req.session.authenticated = false;
        }

        res.locals.authenticated = req.session.authenticated;

        next();
    })
}
 

