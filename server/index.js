const express = require('express');
const path=require('path')

const gameController = require('./controllers/game');
const usersController=require('./controllers/users');
const app = express();
const port = 3000;

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-control-Allow-Headers"."Origin, X-Requested-With, Content-Type,Accept,Authorization")
})