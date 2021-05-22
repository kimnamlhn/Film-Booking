var exphbs  = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', exphbs({
        defaultLayout: 'main.hbs',
        extname: '.hbs'
      }
      ));
      app.set('view engine', 'hbs');
}
