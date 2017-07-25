const express=require('express');
const router= express.Router();
const User=require('../models/user');
const passport=require('passport');
const jwt=require('jsonwebtoken');

//Register

router.post('/register',function(req,res,next){
	var newUser = new User({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});
	User.addUser(newUser,function(err,user){
		if(err){
			res.json({success:false, msg: "Failed to register user"});
		}
		else{
			res.json({success:true, msg: "User registered"+user})
		}
	});
});

router.post('/authenticate',function(req,res){
	res.send('AUTHENTICATE');
});

router.get('/profile',function(req,res){
	res.send('PROFILE');
});

module.exports=router;