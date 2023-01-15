var express = require('express');
var router = express.Router();
const mysql = require("mysql2");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.send("<html>");
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err);
    }
    console.log("result from users.js", res);
    res.send(res);
  });
});

module.exports = router;
