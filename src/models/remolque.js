"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RemolqueSchema = new mongoose_1.Schema({
    tipo: { type: String, required: true },
    adcionales: { type: String, required: true },
    marca: { type: String, required: true },
    patente: { type: String, required: true },
    anio: { type: Number, required: true },
    vpc: { type: Date, required: true },
    permisoCircula: { type: String, required: true },
    vrt: { type: Date, required: true },
    revisiontecnica: { type: String, required: true },
    vsc: { type: Date, Required: true },
    segurodecarga: { type: String, required: true },
    ufseguro: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});
const RegistrarR = (0, mongoose_1.model)("remolque", RemolqueSchema);
exports.default = RegistrarR;
