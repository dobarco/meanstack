const path=require('path');
const express=require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const config=require('./config/database');
const mongoose=require('mongoose');
const passport=require('passport');


//Connect to Database
mongoose.connect(config.database);

//Sucess
mongoose.connection.on('connected',function(){
	console.log("Connected to the database: "+config.database);
})
//Error
mongoose.connection.on('error',function(err){
	console.log("Database error: "+config.database+err);
})
//Declaring Express variable
const app=express();

//Port Number
const port=3000;

const users=require('./routes/users');

//Body Parser Middleware 
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use(express.static(path.join(__dirname,'public')));

//Index Route
app.get('/',function(req,res){
	res.send('Invalid Endpoints');
});

app.use('/users',users);

app.listen(port, function(){
	console.log('Server started on port '+port);
});