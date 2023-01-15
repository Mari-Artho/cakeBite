console.log("Hello Mari");

var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

/* GET users listing. */
router.get('/', function(req, res, next) {
req.app.locals.con.connect(function(err){
  if(err){
    console.log(err)
  }
  let adminId = 2;
  let adminName = "Flore";
  let cafeId = 2;
  //Send data to database
  let sql = `
    INSERT INTO admin( adminId, adminName, cafeId) 
    VALUES("${adminId}","${adminName}", "${cafeId}")
  `

  //let sql = ` SELECT * FROM users `

  req.app.locals.con.query(sql, function(err, result){
    if(err){
      console.log(err);
    }
    console.log("result from backend file's hello.js", result);
    //res.send(result);
  })
})
  res.send('respond with a resource');
});

module.exports = router;