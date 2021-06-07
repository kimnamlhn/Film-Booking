module.exports = function (req, res, next) {
    if (req.session.authenticated === false) {
      req.session.retUrl = req.originalUrl;
      return res.redirect('account/login');
    }
  
    next();
  }
 