'use strict'
var express= require('express');

var SiloController = require('./../controller/silos');
var router = express.Router();

router.get('/home',SiloController.home);
router.get('/',SiloController.getSilos);
router.get('/:id',SiloController.getSilo);
router.post('/crear-silo',SiloController.saveSilo);
router.put('/:id',SiloController.updateSilo);
router.delete('/delete-silo/:id',SiloController.deleteSilo);

module.exports=router;