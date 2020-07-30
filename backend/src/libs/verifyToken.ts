import { Request, Response, NextFunction } from 'express';
import jwt, { decode } from "jsonwebtoken";
import * as currentUser from "./../../types";
interface IPayload {
    _id: string;
    iat: number;
    role: string;
}


export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.TOKEN || 'tokentest', function (error, decoded)  {
            if (error) return res.status(403).send({ message: 'No tienes los permisos suficientes para estar aquí...' });

            next();

        });
    } else {
        return res.status(403).send({ message: 'No tienes los permisos suficientes para estar aquí...' });
    }
}





