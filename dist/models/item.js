"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TramoSchema = new mongoose_1.Schema({
    idUsuario: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    vuelta: {
        type: Number,
        required: true
    },
    viatico: {
        type: Number,
        required: true
    },
    pesaje: {
        type: Number,
        required: true
    },
    reparacion: {
        type: Number,
        required: true
    },
    combustible: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const TramoModel = (0, mongoose_1.model)("tramos", TramoSchema);
exports.default = TramoModel;
