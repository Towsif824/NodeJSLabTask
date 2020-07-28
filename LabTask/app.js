var express = require('express');
var bodyParser = require ('body-parser');
var login = require('./controller/login');
//var home = require('./controller/home');
var admin = require('./controller/admin');
var addEmployee =     require('./controller/Admin/AddEmployee');
var allEmployeeList = require('./controller/Admin/AllEmployeeList');
var employee = require('./controller/employee');
var app = express();




app.set('view engine', 'ejs');

app.use(bodyParser());
app.use('/login', login);
//app.use('/home',home);
app.use('/admin', admin);
//app.use('/AddEmployee', addemployee);
//app.use('/AllEmpList', allEmpList);
app.use('/employee', employee);
app.use('/Admin/AddEmployee',addEmployee);
app.use('/Admin/AllEmployeeList',allEmployeeList);




app.listen(3000, function(){
	console.log('express server started....');
});