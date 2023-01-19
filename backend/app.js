var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql2");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var cafeRouter = require('./routes/cafe');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/cafe', cafeRouter);

app.locals.con = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "cafe",
    password: "cafe",
    database: "cafe"
});
console.log("Now running at localhost: " + app.locals.con.config.port);

//Test
app.listen(3001, function(){
    console.log("Server is working at port 3001");
})
app.get("/", function(req,res){
    console.log("Handler for GET /")
    res.send(`<h1>Hello Mari from Express!!</h1>`)
});

module.exports = app;


