var express = require('express');
var router = express.Router();



router.use('/',function(req,res){
  res.render('admin');
});




router.post('/',function(req,res){
  if(req.body.choice=='AddEmployee'){
    res.redirect('/AddEmployee');
  }

  else if(req.body.choice=='AllEmpList'){
    res.redirect('/AllEmpList');
  }
});


module.exports = router;
