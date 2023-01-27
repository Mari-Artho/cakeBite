var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err);
    }
  });
});

console.log("Now running user.js");

module.exports = router;
