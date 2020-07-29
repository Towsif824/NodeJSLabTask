var express = require('express');
var bodyParser = require ('body-parser');
var login = require('./controller/login');
var admin = require('./controller/admin');
//var addemployee = ('./controller/AddEmployee');
//var allEmpList = ('./controller/AllEmpList');
var employee = require('./controller/employee');
var myProfile       = require('./controller/MyProfile');
//var updateProfile   = require('./controller/UpdateProfile');
var app = express();




app.set('view engine', 'ejs');

app.use(bodyParser());
app.use('/login', login);;
app.use('/admin', admin);
//app.use('/AddEmployee', addemployee);
//app.use('/AllEmpList', allEmpList);
app.use('/employee', employee);
app.use('/MyProfile',myProfile);
//app.use('/UpdateProfile',updateProfile);




app.listen(3000, function(){
	console.log('express server started....');
});