var express = require('express');
var router = express.Router();



router.get('/',function(req,res){
  res.render('admin');
});


router.post('/',function(req,res){
  if(req.body.AddEmployee =='AddEmployee'){
    res.redirect('/AddEmployee');
  }

  else if(req.body.AllEmpList =='AllEmpList'){
    res.redirect('/AllEmpList');
  }
});


module.exports = router;
