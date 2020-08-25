"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValidation = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN || 'tokentest', function (error, decoded) {
            if (error)
                return res.status(403).send({ message: 'No tienes los permisos suficientes para estar aquí...' });
            next();
        });
    }
    else {
        return res.status(403).send({ message: 'No tienes los permisos suficientes para estar aquí...' });
    }
};
//# sourceMappingURL=verifyToken.js.map