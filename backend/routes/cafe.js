var express = require('express');
var router = express.Router();

/* GET users listing. */
console.log("+++" + router.params.id)
router.get('/', function(req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err);
    }

    //TODO: below sql, id 
    let sql = `SELECT * FROM cafe WHERE id=router.params.id`

    req.app.locals.con.query(sql, function(err, result){
      if(err){
        console.log(err);
      }
     console.log("result", result)
     res.send(result);
    });
  });
});

console.log("Now running cafe.js");

module.exports = router;
