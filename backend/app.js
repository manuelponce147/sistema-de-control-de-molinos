'use strict'

var express=require('express');
var bodyParser = require('body-parser');

var app=express();


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//cargar archivis de rutas
var pesajes_routes = require('./router/pesajes');
var silos_router=require('./router/silos');
// cors 
app.use(function (req,res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-COntrol-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,x-client-key,x-client-token,x-client-secret,Authorization");
    next();

});

// rutas
app.use('/api',pesajes_routes);
app.use('/api',silos_router);
module.exports=app;