"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: String,
    rut: String,
    razonSocial: String,
    pesoEntrada: Number,
    pesoSalida: Number,
    tipoTransaccion: String,
    tipoVehiculo: String,
    patente: String,
});
exports.default = mongoose_1.model('Pesaje', schema);
//# sourceMappingURL=pesaje.js.map