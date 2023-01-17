var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql2");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.locals.con = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "cafe",
    password: "cafe",
    database: "cafe"
});
console.log("Now running at localhost:8889" );

//Test
app.listen(3000, function(){
    console.log("Server is working at port 3000");
})
app.get("/", function(req,res){
    res.send(`<h1>Hello Mari from Express!!</h1>`)
});

module.exports = app;


