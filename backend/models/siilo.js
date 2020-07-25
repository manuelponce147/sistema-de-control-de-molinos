'use strict';

var mongose =require('mongoose');
var Schema=mongose.mongo.Schema;

var SiloSchema = Schema({
    nombre:String,
    capacidadTotal:Number,
    stock:Number,
    tipoProducto:String,
    estado:booolean=true
});
module.exports = mongose.model('Silo',SiloSchema);