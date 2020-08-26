import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    nombre:String,
    capacidadTotal:Number,
    stock:Number,
    tipoProducto:String,
    estado:Boolean
});

export interface ISilo extends Document {
    nombre:String;
    capacidadTotal:Number;
    stock:Number;
    tipoProducto:String;
    estado:Boolean;
}

export default model<ISilo> ('Silo ', schema);