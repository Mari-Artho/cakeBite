var express = require('express');
const req = require('express/lib/request');
var router = express.Router();
const mysql = require('mysql2');

console.log("Now running cafe.js");

/* GET a selected cafe data. */
router.get('/cafe/:id', function(req, res) {
  let con = req.app.locals.con;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  con.connect(function(err){
    if(err){
      console.log(err);
    }

    let sql = `SELECT * FROM cafe WHERE cafeId=?`
    let query = con.format(sql, [req.params.id]);

    con.query(query, function(err, result){
      if(err){
        console.log(err);
      }
     console.log("result", result)
     res.send(result);
    });
  });
});

module.exports = router;
