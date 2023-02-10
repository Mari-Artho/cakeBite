var express = require('express');
var router = express.Router();

/* GET an admin data. */
router.get('/', function(req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err);
    }
    let sql = `SELECT * FROM admin`

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }
     console.log("result in admin.js", result)
     res.send(result);
    });
  });
});

console.log("Now running admin.js");

module.exports = router;
