"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: String,
    capacidadTotal: Number,
    stock: Number,
    tipoProducto: String,
    estado: Boolean
});
exports.default = mongoose_1.model('Silo ', schema);
//# sourceMappingURL=silo.js.map