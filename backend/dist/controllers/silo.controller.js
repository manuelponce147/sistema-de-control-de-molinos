"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSilo = exports.getSilo = exports.deleteSilo = exports.createSilo = exports.getSilos = void 0;
const silo_1 = __importDefault(require("../models/silo"));
async function getSilos(req, res) {
    const silos = await silo_1.default.find();
    return res.json(silos);
}
exports.getSilos = getSilos;
async function createSilo(req, res) {
    const { nombre, capacidadTotal, stock, tipoProducto, estado } = req.body;
    const newSilo = { nombre, capacidadTotal, stock, tipoProducto, estado };
    const silo = new silo_1.default(newSilo);
    await silo.save();
    return res.json({
        message: 'silo Saved Successfully',
        silo
    });
}
exports.createSilo = createSilo;
;
async function deleteSilo(req, res) {
    const { id } = req.params;
    const silo = await silo_1.default.findByIdAndRemove(id);
    return res.json({ message: 'Silo Deleted' });
}
exports.deleteSilo = deleteSilo;
;
async function getSilo(req, res) {
    const { id } = req.params;
    const silo = await silo_1.default.findById(id);
    return res.json(silo);
}
exports.getSilo = getSilo;
async function updateSilo(req, res) {
    const { id } = req.params;
    const { nombre, capacidadTotal, stock, tipoProducto, estado } = req.body;
    const updatedSilo = await silo_1.default.findByIdAndUpdate(id, { nombre, capacidadTotal, stock, tipoProducto, estado });
    return res.json({
        message: 'Successfully updated',
        updatedSilo
    });
}
exports.updateSilo = updateSilo;
//# sourceMappingURL=silo.controller.js.map