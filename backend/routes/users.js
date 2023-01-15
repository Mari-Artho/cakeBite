var express = require('express');
var router = express.Router();
//const mysql = require("mysql2");

/* GET users listing. */
router.get('/', function(req, res) {
  //res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'})
  //res.send("<html>");
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err);
    }
    let adminId = 2;
    let adminName = "Flore";
    let cafeId = 2 ;
    let sql = `INSERT INTO admin(adminId, adminName, cafeId)
               VALUES("${adminId}", "${adminName}", "${cafeId}")`

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }
     console.log("rerult", result)
    });
    res.send('respond with a resource');
    
    //res.send(result);
  });
});

console.log("Now running user.js");

module.exports = router;
