const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const port = 3000;

//morgan
app.use(morgan('combined'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// static express
app.use(express.static( path.join(__dirname,'public')));

//template engine
app.engine('hbs', exphbs({extname : '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resource/views'));

app.get("/", (req,res) =>{
    console.log(res,req);
    res.render('home');
});

app.post("/" , (req,res) =>{
    const {email,password} = req.body;
    res.redirect("/");
});

app.get("/news" ,(req,res) =>{
    res.render("news");
})

app.listen(port , () => console.log(`listening at port : ${port}`))