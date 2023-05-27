import { Schema, Types, model, Model } from "mongoose";
import { UserApp } from "../interfaces/userApp.interface"

const userSchema = new Schema<UserApp>(
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
        fnacimiento :{
            type : Date,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        nombreEpresa:{
            type: String,
            required:true
        },
        region:{
            type: String,
            required: true
        },
        ciudad:{
            type: String,
            required:true
        },
        tipoUsuario:{
            type: String,
            required: true
        }
        
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const usuarioApp = model("clientes", userSchema);
export default usuarioApp;

