'use strict'
var express= require('express');

var SiloController = require('./../controller/silos');
var router = express.Router();

router.get('/home',SiloController.home);