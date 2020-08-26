"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.signin = exports.signup = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.signup = async (req, res) => {
    const user = new user_1.default({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encryptPassword(user.password);
    const verifyEmail = await user_1.default.findOne({ email: user.email });
    if (verifyEmail)
        return res.status(401).json("Error este email ya existe");
    const savedUser = await user.save();
    //token
    const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'tokentest');
    res.header('auth-token', token).json({ user: savedUser });
};
exports.signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await user_1.default.findOne({ email });
    if (!user)
        return res.status(404).json("Email incorrecto !!");
    const correctPassword = await user.validatePassword(password);
    if (!correctPassword)
        return res.status(404).json("Verifique su Contraseña");
    const token = jsonwebtoken_1.default.sign({ _id: user._id, role: user.userRole }, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60 * 60 * 24
    });
    res.header('auth-token', token).json({ token: token, user: user });
};
exports.getUsers = async (req, res) => {
    const users = await user_1.default.find();
    if (!users)
        return res.status(404).json({ message: "Error al obtener los ususarios" });
    return res.status(200).json(users);
};
//# sourceMappingURL=auth.controller.js.map