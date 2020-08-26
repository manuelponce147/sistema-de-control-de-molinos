import {Schema, model,Document} from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    userRole:string;
    encryptPassword(password:string):Promise<string>;
    validatePassword(password:string):Promise<boolean>;
}

const schema = new Schema({
    name:{
        type:String,
        required:true,
        min:20
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true

    },
    userImg:{
        type:String,
        default:null
    },
    userRole:{
        type:String,
        required:true,
        default:"regular",
        enum:[
            'regular',
            'encargado',
            'admin'
        ]
    }

},{
    timestamps:true
    
});
schema.methods.encryptPassword = async (password:string):Promise<string>=>{
    const salt =await bcrypt.genSalt(0);
    return bcrypt.hash(password,salt);
}
schema.methods.validatePassword = async function(password:string):Promise<boolean>{
    return await bcrypt.compare(password,this.password);
}


export default model<IUser>('User',schema);