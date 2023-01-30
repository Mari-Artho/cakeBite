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

//from MySQL
//UPDATE `cakes` SET `slicesLeft` = '20' WHERE `cakes`.`cakeId` = 1; 

//update
router.put('/cakes/:id/:slices', function(req, res) {
  let con = req.app.locals.con;
  console.log("con is: " + con);
  res.setHeader('content-type', 'application/json; charset=utf-8');
  con.connect(function(err) {
      if (err) {
          console.log(err)
      }
      let sql = `UPDATE cakes SET slicesLeft = ? WHERE cakes.cakeId = ?`;
      let query = con.format(sql, [req.params.slices, req.params.id]);
      con.query(query, function(err, result) {
          if (err) {
              console.log(err)
          res.send("update result is: " + result);
          }
      })
  })
})

console.log("Now running cakes.js");

module.exports = router;
