'use strict'

var express= require('express');
var Silo = require('./../models/siilo');
var fs = require('fs');
var path = require('path');

var controller={
    home: function(req,res){
        return res.status(200).send({message:"soy el silo"});
    }

}
module.exports=controller;
