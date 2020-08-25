"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePesaje = exports.getPesaje = exports.deletePesaje = exports.createPesaje = exports.getPesajes = void 0;
// Models
const pesaje_1 = __importDefault(require("../models/pesaje"));
async function getPesajes(req, res) {
    const pesajes = await pesaje_1.default.find();
    return res.json(pesajes);
}
exports.getPesajes = getPesajes;
;
async function createPesaje(req, res) {
    const { nombre, rut, razonSocial, pesoEntrada, pesoSalida, tipoTransaccion, tipoVehiculo, patente } = req.body;
    const newPesaje = { nombre, rut, razonSocial, pesoEntrada, pesoSalida, tipoTransaccion, tipoVehiculo, patente };
    const pesaje = new pesaje_1.default(newPesaje);
    await pesaje.save();
    return res.json({
        message: 'Pesaje Saved Successfully',
        pesaje
    });
}
exports.createPesaje = createPesaje;
;
async function deletePesaje(req, res) {
    const { id } = req.params;
    const pesaje = await pesaje_1.default.findByIdAndRemove(id);
    return res.json({ message: 'Pesaje Deleted' });
}
exports.deletePesaje = deletePesaje;
;
async function getPesaje(req, res) {
    const { id } = req.params;
    const pesaje = await pesaje_1.default.findById(id);
    return res.json(pesaje);
}
exports.getPesaje = getPesaje;
async function updatePesaje(req, res) {
    const { id } = req.params;
    const { nombre, rut, razonSocial, pesoEntrada, pesoSalida, tipoTransaccion, tipoVehiculo, patente } = req.body;
    const updatedPesaje = await pesaje_1.default.findByIdAndUpdate(id, { nombre, rut, razonSocial, pesoEntrada, pesoSalida, tipoTransaccion, tipoVehiculo, patente });
    return res.json({
        message: 'Successfully updated',
        updatedPesaje
    });
}
exports.updatePesaje = updatePesaje;
//# sourceMappingURL=pesaje.controller.js.map