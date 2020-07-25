'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PesajeSchema = Schema({
        nombre:String,
        rut:String,
        razonSocial:String,
        pesoEntrada:Number,
        pesoSalida:Number,
        tipoTransaccion:String,
        tipoVehiculo:String,
        patente:String, 

});

module.exports = mongoose.model('Pesaje', PesajeSchema);
// projects  --> guarda los documents en la coleccion