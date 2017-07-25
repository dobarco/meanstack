const path=require('path');
const express=require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const config=require('./config/database');
const mongoose=require('mongoose');

//Connect to Database
mongoose.connect(config.database);

mongoose.connection.on('connected',function(){
	console.log("Connected to the database: "+config.database);
})
mongoose.connection.on('error',function(err){
	console.log("Database error: "+config.database+err);
})
const app=express();

//Port Number
const port=3000;

const users=require('./routes/users');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

//Index Route
app.get('/',function(req,res){
	res.send('Invalid Endpoints');
});

app.use('/users',users);

app.listen(port, function(){
	console.log('Server started on port '+port);
});