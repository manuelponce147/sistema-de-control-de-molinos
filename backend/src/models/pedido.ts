import {Schema, model ,Document} from 'mongoose';

export interface IPedido extends Document{
    producto:string;
    cliente:string;
    cantidad:number;
    precio:number;
}





const schema = new Schema({
    producto:{
        type:String,
        required:true    
    },
    cliente:{
        type:String,
        required:true
    },
    cantidad:{
        type:Number,
        required:true

    },
    precio:{
        type:Number,
        required:true

    },
    status:{
        type:Boolean,
        required:true,
        default:true

    }  
    
},
{timestamps:true}
);

export default model<IPedido> ('Pedido',schema);