'use strict'
var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var ProductSchema = Schema({
    nombre:String,
    tipoProducto:String,
    precio:Number,
    image:String

});
module.exports=mongoose.model('Producto',ProductSchema);