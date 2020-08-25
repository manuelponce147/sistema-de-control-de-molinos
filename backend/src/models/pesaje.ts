import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    rut:{
        type:String,
        required:true
    },
    razonSocial:{
        type:String,
        required:true
    },
    pesoEntrada:{
        type:Number,
        required:true
    },
    pesoSalida:{
        type:Number,
        required:true
    },
    tipoTransaccion:{
        type:String,
        required:true
    },
    tipoVehiculo:{
        type:String,
        required:true
    },
    patente:{
        type:String,
        required:true
    },
    tipoProducto:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

export interface IPesaje extends Document {
    nombre:String;
    rut:String;
    razonSocial:String;
    pesoEntrada:Number;
    pesoSalida:Number;
    tipoTransaccion:String;
    tipoVehiculo:String;
    patente:String; 
    tipoProducto:String;
}

export default model<IPesaje>('Pesaje', schema);