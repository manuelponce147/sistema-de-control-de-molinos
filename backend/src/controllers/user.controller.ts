import { Request, Response } from "express";
import User, { IUser } from '../models/user';
import Mail from "../services/mail";
import * as generator from "generate-password";

export async function getUsers(req:Request, res:Response){
    const  users = await User.find();
    if(!users) return res.status(404).json({message:"Error al obtener los ususarios"});

    return res.status(200).json(users);
}
export async function getUsersName(req:Request, res:Response){
    const  users = await User.find({userRole:'regular'},{name:1,_id:1});
    if(!users) return res.status(404).json({message:"Error al obtener los ususarios"});

    return res.status(200).json(users);
}
export async function getUser(req:Request,res:Response){
    const {id} = req.params;
    const user= await User.findById(id);
    if(!user) return res.status(404).json({message:"No se ha encontrado el usuario"});
    return res.status(200).json(user);
}
export async function getUserData(req:Request,res:Response){
    const {id} = req.params;
    const user= await User.find().populate('name','email');
    if(!user) return res.status(404).json({message:"No se ha encontrado el usuario"});
    return res.status(200).json();
}
export async function changeRole(req:Request, res:Response){
    const {id}= req.params;
    const {userRole}=req.body;
    const update= await User.findByIdAndUpdate(id,{
        userRole
    });
    if(!update) return res.status(404).send({message:"No se ha encontrado el usuario"});
    return res.status(200).json(update);
}
export async function newPassword(req:Request,res:Response){
    const {email}=req.body;
    const user = await User.findOne({ email });    
    
    if (!user) return res.status(404).json("Email incorrecto !!");
    var password = generator.generate({
        length:10,
        numbers:true
    });
    var encrypPass=await user.encryptPassword(password);    
    const newUser=await User.findByIdAndUpdate(user.id,{
        password:encrypPass
    });
    
    if(!newUser) return res.status(400).send("Error al actualzar la contraseña");
    
    Mail.to = email;
    Mail.subject = "Cambio de contraseña";
    Mail.message = "su nueva contraseña es: "+password;
    const result = await Mail.sendMail();

    return res.status(200).send({message:"se ha cambiado exitosamente la contraseña"})


    
    
}