"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = __importStar(require("body-parser"));
// router files
const index_1 = __importDefault(require("./router/index"));
const pesaje_1 = __importDefault(require("./router/pesaje"));
const silos_1 = __importDefault(require("./router/silos"));
const auth_1 = __importDefault(require("./router/auth"));
// Initializations
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
//midellwares
app.use(cors_1.default());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
});
// Routes
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
app.use('/api', index_1.default);
app.use('/api', pesaje_1.default);
app.use('/api', silos_1.default);
app.use('/api/auth', auth_1.default);
// this folders for this application will be used to store public file images
exports.default = app;
//# sourceMappingURL=app.js.map