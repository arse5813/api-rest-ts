import { Schema, Types, model, Model } from "mongoose";
import { misDocu } from "../interfaces/misdocumentos"

const RegDocuSchema = new Schema<misDocu>(
    {
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        },
        rut:{
            type: String,
            required:true,
            unique:true
        },
        Cidentidad :{
            type : String,
            required: true
        },
        TipoLicencia: {
            type: String,
            required: true
        },
        LicenciaConducir:{
            type: String,
            required:true
        }       
        
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const RegistrarDocu = model("misdocumentos", RegDocuSchema);
export default RegistrarDocu;

