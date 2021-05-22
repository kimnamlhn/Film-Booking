const express = require('express')
const app = express()
const port = 3000;

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about');
});

//middlewares
const view = require('./middlewares/view.mdw')(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})