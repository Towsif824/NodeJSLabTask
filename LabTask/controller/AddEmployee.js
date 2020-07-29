var express = require('express');
var router = express.Router();

router.use('/', function(req, res){
	res.render('AddEmployee');
});

router.post('/', function(req, res){
	res.send('Employee Added Successfully');
});

module.exports = router;