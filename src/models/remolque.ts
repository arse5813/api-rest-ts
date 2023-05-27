import { Schema, Types, model, Model } from "mongoose";
import {  Remo  } from '../interfaces/remolque';

const RemolqueSchema = new Schema<Remo>(
    {
        tipo:           {type: String, required: true },
        adcionales:     {type: String, required: true },
        marca:          {type: String, required: true },
        patente:        {type: String, required: true },
        anio:           {type: Number, required: true },
        vpc:            {type: Date,   required: true },
        permisoCircula: {type: String, required: true },
        vrt:            {type: Date,   required: true },
        revisiontecnica:{type: String, required: true },
        vsc:            {type: Date,   Required: true },
        segurodecarga:  {type: String, required: true },
        ufseguro:       {type: String, required: true}   
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const RegistrarR = model("remolque", RemolqueSchema);
export default RegistrarR;

