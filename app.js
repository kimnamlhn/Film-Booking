const express = require('express')
var exphbs  = require('express-handlebars');
const app = express()
const port = 3000;

app.use(express.static('public'))

app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  extname: '.hbs'
}
));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home');
});






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})