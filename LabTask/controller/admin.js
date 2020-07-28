 var express = require('express');
var  router = express.Router();

router.get('/', function(req,res){
	res.send('welcome home Admin!');
	

});

router.post('/',function(req,res){
	res.send('welcome home Admin!');
});

module.exports = router;
