var express = require('express');
var router = express.Router();
//const mysql = require("mysql2");

/* GET users listing. */
router.get('/', function(req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  //res.send("<html>");
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err);
    }
    let sql = `SELECT * FROM admin`

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }
     console.log("result", result)
     res.send(result);
    });
    //res.send('respond with a resource');
  });
});

console.log("Now running user.js");

module.exports = router;
