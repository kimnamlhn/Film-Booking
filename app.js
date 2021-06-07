const express = require('express')
const app = express()
const port = 3000;

//bodyparse middware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//set static forder public
app.use(express.static(__dirname + '/public'));


//middlewares
require('./middlewares/view.mdw')(app);
require('./middlewares/session.mdw')(app);
require('./middlewares/locals.mdw')(app);
require('./middlewares/routes.mdw')(app);
require('./middlewares/err.mdw')(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})