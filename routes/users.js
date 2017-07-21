const express=require('express');

const router= express.Router();

//Register

router.get('/register',function(req,res){
	res.send('REGISTER');
});

router.get('/authenticate',function(req,res){
	res.send('AUTHENTICATE');
});

router.get('/profile',function(req,res){
	res.send('PROFILE');
});

router.get('/validate',function(req,res){
	res.send('VALIDATE');
});

module.exports=router;