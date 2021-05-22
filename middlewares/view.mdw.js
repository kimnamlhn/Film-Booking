var exphbs  = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', exphbs({
        defaultLayout: 'main.hbs',
        extname: '.hbs',
        layoutsDir: 'views/_layouts',
        partialsDir: 'views/_partials',
      }
      ));
      app.set('view engine', 'hbs');
}
