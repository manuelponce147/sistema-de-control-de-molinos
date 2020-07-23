'use strict'

var express = require('express');
var PesajeController = require('../controller/pesajes');

var router  = express.Router();

router.get('/home',PesajeController.home);


module.exports = router;