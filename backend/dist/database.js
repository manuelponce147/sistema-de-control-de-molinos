"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    const db = await mongoose_1.connect('mongodb://localhost/molinos', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .then(() => console.log('Database is connected'))
        .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });
}
exports.startConnection = startConnection;
//# sourceMappingURL=database.js.map