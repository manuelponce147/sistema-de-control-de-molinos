"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const auth_controller_1 = require("../controllers/auth.controller");
router.route('/signup').post(auth_controller_1.signup);
router.route('/signin').post(auth_controller_1.signin);
//router.route('/profile').post(TokenValidationprofile);
exports.default = router;
//# sourceMappingURL=auth.js.map