"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TractCSchema = new mongoose_1.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    anio: { type: Number, required: true },
    patente: { type: String, required: true },
    vpc: { type: Date, required: true },
    PermisoCulacion: { type: String, required: true },
    vrt: { type: Date, required: true },
    revisonTec: { type: String, required: true },
    vso: { type: Date, required: true },
    seguroObliga: { type: String, Required: true }
}, {
    timestamps: true,
    versionKey: false
});
const RegistrarTC = (0, mongoose_1.model)("tractocamion", TractCSchema);
exports.default = RegistrarTC;
/*

*/ 
