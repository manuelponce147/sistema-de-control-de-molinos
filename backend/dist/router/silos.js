"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const silo_controller_1 = require("../controllers/silo.controller");
//routes
router.route('/silos')
    .get(silo_controller_1.getSilos)
    .post(silo_controller_1.createSilo);
router.route('/silos/:id')
    .get(silo_controller_1.getSilo)
    .put(silo_controller_1.updateSilo)
    .delete(silo_controller_1.deleteSilo);
exports.default = router;
//# sourceMappingURL=silos.js.map