import { Schema, Types, model, Model } from "mongoose";
import { RegistrarServ } from "../interfaces/registrodeservicio"

const RegServSchema = new Schema<RegistrarServ>(
    {
        nombreConductor: {
            type: String,
            required: true
        },
        apellidoConductor: {
            type: String,
            required: true
        },
        tipoServicios:{
            type: String,
            required:true,
            unique:true
        },
        tiposemiremolque :{
            type : String,
            required: true
        },
        patentetracto: {
            type: String,
            required: true
        },
        patentesemirremolque:{
            type: String,
            required:true
        },
        numeroguia:{
            type: String,
            required: true
        },
        informacionAdi:{
            type: String,
            required:true
        },
        fechapresentacion:{
            type: Date,
            required: true
        },
        horapresentacion:{
            type: Date,
            Required: true
        },
        horaretiro:{
            type: Date,
            required:true
        },
        horadescarga:{
            type: Date,
            required:true
        }
        
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const RegistrarServ = model("registrrervicio", RegServSchema);
export default RegistrarServ;

