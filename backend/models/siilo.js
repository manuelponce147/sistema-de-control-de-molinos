'use strict';

var mongose =require('mongoose');
var Schema=mongose.Schema;

var SiloSchema = Schema({
    nombre:String,
    capacidadTotal:Number,
    stock:Number,
    tipoProducto:String,
    estado:Boolean
});
module.exports = mongose.model('Silo',SiloSchema);