'use strict'

var express = require('express');
var PesajeController = require('../controller/pesajes');

var router  = express.Router();

router.get('/home',PesajeController.home);
router.post('/save-pesaje',PesajeController.savePesaje);
router.get('/pesajes',PesajeController.getPesajes);
router.put('/pesaje/:id',PesajeController.updatePesaje);
router.delete('/pesaje/:id',PesajeController.deletePesaje);
router.get('/pesaje/:id',PesajeController.getPesaje);

module.exports = router;