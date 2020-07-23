'use strict'

var express = require('express');
var Pesaje = require('../models/pesajes');
var fs = require('fs');
var path = require('path')

var controller = {
    home: function(req,res){
        return res.status(200).send({message:"soy el home"});
    }
}

module.exports = controller;