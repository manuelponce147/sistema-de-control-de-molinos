'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PesajeSchema = Schema({
	    tipoTransaccion:String,
        pesoEntradad:Number,
        pesoSalida:Number,
});

module.exports = mongoose.model('Pesaje', PesajeSchema);
// projects  --> guarda los documents en la coleccion