var express = require('express');
var router = express.Router();

router.get('/login/:name/:password', function(req, res) {
  let con = req.app.locals.con;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  con.connect(function(err){
    if(err){
      console.log(err);
    }
    // Check if account with the same user name and password exists in the database
    let sql = `SELECT * FROM admin WHERE adminName = ? AND password = ?`
    let query = con.format(sql, [req.params.name, req.params.password]);

    con.query(query, function(err, result){
      if(err){
        console.log(err);
      }
      // only one user name/password pair can match in the DB,
      // so we use the first (and only) entry
      let login = result[0];
      console.log("result", login)
      if (login === undefined) {
        res.send({name: "", password: "", cafeId: 0});
      } else {
        res.send(login);
      }
    });
  });
});

console.log("Now running login.js!");

module.exports = router;
