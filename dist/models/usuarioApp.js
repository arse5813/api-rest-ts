"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
    fnacimiento: {
        type: Date,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    nombreEpresa: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    tipoUsuario: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const usuarioApp = (0, mongoose_1.model)("clientes", userSchema);
exports.default = usuarioApp;
