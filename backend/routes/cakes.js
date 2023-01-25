var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cakes/:id', function(req, res) {
  let con = req.app.locals.con;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  con.connect(function(err){
    if(err){
      console.log(err);
    }
    let sql = `SELECT * FROM cakes WHERE cafeId = ?`
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

console.log("Now running cakes.js");

module.exports = router;
