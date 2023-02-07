var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql2");
const cors = require('cors');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var cafesRouter = require('./routes/cafes');
var cafeRouter1 = require('./routes/cafe');
var cakesRouter = require('./routes/cakes');
var loginRouter = require('./routes/login');
const { config } = require('dotenv');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/cafes', cafesRouter);
app.get('/cafe/:id', cafeRouter1); // need to use app.get to receive params
app.get('/cakes/:id', cakesRouter);
app.put('/cakes/:id/:slices', cakesRouter);//to update slice of cakes
app.get('/login/:name/:password', loginRouter);

//require('dotenv').config();

// test2
try {
  require('dotenv').config({ debug: true });
} catch {
  console.log("No dotenv found.")
}

//test1
// const dotenv = require('dotenv').config();
// app.use(dotenv());

const db_host = process.env.MYSQLHOST || "localhost";
const db_port = process.env.MYSQLPORT || 8889;
const db_user = process.env.MYSQLUSER;
const db_password = process.env.MYSQLPASSWORD;

app.locals.con = mysql.createConnection({
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: "cafe"
});
console.log("Now running at localhost: " + app.locals.con.config.port);

module.exports = app;


