"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// arrancar servidor 
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.port || 3000;
//configuration
app.set('port', port);
//Middlwares
