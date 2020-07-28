var express = require('express');
var router = express.Router();



router.get('/',function(req,res){
  res.render('employee');
});




router.post('/',function(req,res){
  if(req.body.mp=="MyProfile"){
    res.redirect('/MyProfile');
  }
  else if(req.body.up=="UpdateProfile"){
    res.redirect('/UpdateProfile');
  }
});

module.exports = router;

