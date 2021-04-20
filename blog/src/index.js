const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;

const route = require('./routes/index.route');
const db = require('./congfig/db/index');
db.connect();
//morgan
app.use(morgan('combined'));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
// static express
app.use(express.static( path.join(__dirname,'public')));

//template engine
app.engine('hbs', exphbs({extname : '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resource/views'));


route(app);


app.listen(port , () => console.log(`listening at port : ${port}`))