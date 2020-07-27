import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    nombre:String,
    rut:String,
    razonSocial:String,
    pesoEntrada:Number,
    pesoSalida:Number,
    tipoTransaccion:String,
    tipoVehiculo:String,
    patente:String, 
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
}

export default model<IPesaje>('Pesaje', schema);