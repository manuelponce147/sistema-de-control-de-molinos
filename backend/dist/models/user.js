"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 20
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    userImg: {
        type: String,
        default: null
    },
    userRole: {
        type: String,
        required: true,
        default: "regular",
        enum: [
            'regular',
            'encargado',
            'admin'
        ]
    }
}, {
    timestamps: true
});
schema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt_1.default.genSalt(0);
    return bcrypt_1.default.hash(password, salt);
};
schema.methods.validatePassword = async function (password) {
    return await bcrypt_1.default.compare(password, this.password);
};
exports.default = mongoose_1.model('User', schema);
//# sourceMappingURL=user.js.map