import { Schema, Types, model, Model } from "mongoose";
import { Tramo } from "../interfaces/tramo.interface";

const TramoSchema = new Schema<Tramo>(
    {
        idUsuario:{
            type: String,
            required: true
        }, 
        fecha:{
            type: Date,
            default: Date.now
        },
        vuelta:{
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
        reparacion:{
            type: Number,
            required: true
        },
        combustible: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const TramoModel = model("tramos", TramoSchema);
export default TramoModel;