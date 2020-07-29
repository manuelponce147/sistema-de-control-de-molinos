import { Request, Response } from "express";
import User, { IUser } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const signup = async (req: Request, res: Response) => {
    const user: IUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });
    user.password = await user.encryptPassword(user.password);

    const verifyEmail = await User.findOne({ email: user.email });
    if (verifyEmail) return res.status(401).json("Error este email ya existe")
    
    const savedUser = await user.save();
    //token
    const token: string = jwt.sign({ _id: savedUser._id,role:savedUser.userRole}, process.env.TOKEN_SECRET || 'tokentest');

     res.header('token', token).json(savedUser)
}

export const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json("email noty exist");

    const correctPassword: boolean = await user.validatePassword(password);
    if (!correctPassword) return res.status(404).json("error autentication, please verify password");

    const token = jwt.sign({ _id: user._id,role:user.userRole }, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60 * 60 * 24
    });
    //res.header('auth-token', token).json({ token: token });
    res.header('token', token).json(user)
}

