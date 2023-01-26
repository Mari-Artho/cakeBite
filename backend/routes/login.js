var express = require('express');
var router = express.Router();

router.get('/login/:name/:password', function(req, res) {
  let con = req.app.locals.con;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  con.connect(function(err){
    if(err){
      console.log(err);
    }
    let sql = `SELECT * FROM admin WHERE adminName = ? AND password = ?`
    let query = con.format(sql, [req.params.name, req.params.password]);

    con.query(query, function(err, result){
      if(err){
        console.log(err);
      }
     console.log("result", result)
     res.send(result[0]);
    });
  });
});

// router.post('/', function(req, res, next) {
//     console.log(adminId + adminPassword);
//     if(req.body.adminId == '1' && req.body.adminPassword == 'sakura'){
//       res.send({
//         message: 'Login success!'
//       })
//     }else{
//       res.send({
//         message: 'Please input correct id & password'
//       })
//     }
   
//   })

//Test
router.post("/login", (req, res)=> {
  console.log(query);
  let foundUser = query.find((quer)=> {
      return quer.adminName == req.body.adminName && quer.password == req.body.password
  })

  if(foundUser){
      
      return res.send("You are now logged in!!")
  }

  res.send("Fel uppgifter")
})



console.log("Now running login.js!");

module.exports = router;
