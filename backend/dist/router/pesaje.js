"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const verifyToken_1 = require("../libs/verifyToken");
const pesaje_controller_1 = require("../controllers/pesaje.controller");
// middleware
// routes
router.route('/pesajes')
    .get(verifyToken_1.TokenValidation, pesaje_controller_1.getPesajes)
    .post(pesaje_controller_1.createPesaje);
router.route('/pesaje/:id')
    .get(pesaje_controller_1.getPesaje)
    .put(pesaje_controller_1.updatePesaje)
    .delete(pesaje_controller_1.deletePesaje);
exports.default = router;
//# sourceMappingURL=pesaje.js.map