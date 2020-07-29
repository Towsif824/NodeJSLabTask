var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
  res.render('UpdateProfile');
});


router.post('/',function(req,res){

  if(req.body.update=='Update'){
    res.send('Updated');
  }

  else if(req.body.back=='Back'){
    res.redirect('/employee');
  }
});

module.exports = router;
