var express = require('express');
var router = express.Router();



router.get('/',function(req,res){
  res.render('MyProfile');
});



router.post('/',function(req,res){
  if(req.body.choice=="Back"){
    res.redirect('/employee');
  }
});

module.exports = router;
