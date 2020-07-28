var express = require('express');
var router = express.Router();


router.use('/',function(req,res){
  res.render('admin');
});


router.post('/',function(req,res){
  if(req.body.button=="AddEmployee"){
    res.redirect('/AddEmployee');
  }
  else if(req.body.choice=="AllEmployeeList"){
    res.redirect('/AllEmployeeList');
  }
});


module.exports = router;
