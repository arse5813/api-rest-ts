"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RegServSchema = new mongoose_1.Schema({
    nombreConductor: {
        type: String,
        required: true
    },
    apellidoConductor: {
        type: String,
        required: true
    },
    tipoServicios: {
        type: String,
        required: true,
        unique: true
    },
    tiposemiremolque: {
        type: String,
        required: true
    },
    patentetracto: {
        type: String,
        required: true
    },
    patentesemirremolque: {
        type: String,
        required: true
    },
    numeroguia: {
        type: String,
        required: true
    },
    informacionAdi: {
        type: String,
        required: true
    },
    fechapresentacion: {
        type: Date,
        required: true
    },
    horapresentacion: {
        type: Date,
        Required: true
    },
    horaretiro: {
        type: Date,
        required: true
    },
    horadescarga: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const RegistrarServ = (0, mongoose_1.model)("registrrervicio", RegServSchema);
exports.default = RegistrarServ;
