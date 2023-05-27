"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RegDocuSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true,
        unique: true
    },
    Cidentidad: {
        type: String,
        required: true
    },
    TipoLicencia: {
        type: String,
        required: true
    },
    LicenciaConducir: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const RegistrarDocu = (0, mongoose_1.model)("misdocumentos", RegDocuSchema);
exports.default = RegistrarDocu;
