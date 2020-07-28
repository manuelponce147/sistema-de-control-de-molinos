import { Request,Response } from "express";
import User, {IUser} from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signup= async (req:Request,res:Response)=>{
    const user:IUser=new User({
        name:req.body.name,
        email:req.body.email,       
        password:req.body.password

    });
    user.password= await user.encryptPassword(user.password);;
    const savedUser=await user.save();
    console.log(savedUser);
    //token

    const token:string=jwt.sign({_id:savedUser._id},process.env.TOKEN_SECRET || 'tokentest');
    res.header('auth-token',token).json(savedUser);
}

export const signin=async (req:Request,res:Response)=>{
    const {email,password}=req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(400).json("email noty exist");

    const correctPassword:boolean =await user.validatePassword(password);
    if(!correctPassword) return res.status(400).json("error autentication, please verify password");

    const token= jwt.sign({_id:user._id},process.env.TOKEN_SECRET || 'tokentest',{
        expiresIn:60 *60* 24
    })
    res.header('auth-token',token).json(user);
}
/*
export const profile=async (req:Request,res:Response)=>{
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }
    res.json(user);

}*/