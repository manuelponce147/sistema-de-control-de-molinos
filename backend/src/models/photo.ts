import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String,
    price:String
});

export interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
    price:string;
}

export default model<IPhoto>('Photo', schema);