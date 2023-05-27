import { Schema, Types, model, Model } from "mongoose";
import {  tcamion  } from '../interfaces/tracto';

const TractCSchema = new Schema<tcamion>(
    {
        marca:          {type: String, required: true },
        modelo:         {type: String, required: true },
        anio:           {type: Number, required: true },
        patente:        {type: String, required: true },
        vpc:            {type: Date,   required: true },
        PermisoCulacion:{type: String, required: true },
        vrt:            {type: Date,   required: true },
        revisonTec:     {type: String, required: true },
        vso:            {type: Date,   required: true },
        seguroObliga:   {type: String, Required: true }    
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const RegistrarTC = model("tractocamion", TractCSchema);
export default RegistrarTC;
/*

*/