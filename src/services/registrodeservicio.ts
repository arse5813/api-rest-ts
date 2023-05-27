import { RegistrarServ } from "../interfaces/registrodeservicio";
import TramoModel from "../models/registrodeservicio";

const interTramo = async (item : RegistrarServ) => {
    const responseInsert = await TramoModel.create(item);
    return responseInsert;
}

const getTramos  = async() => {
    const responseIntem = await TramoModel.find({});
    return responseIntem
}

const getTramo  = async(id:string) => {
    const responseIntem = await TramoModel.findOne({_id: id});
    return responseIntem
}

const updateTramo  = async(id:string, data: RegistrarServ) => {
    const responseIntem = await TramoModel.findOneAndUpdate({_id: id}, data, { 
        new:true
    });
    return responseIntem
}

const deleteTramo  = async(id:string) => {
    const responseIntem = await TramoModel.findOneAndRemove({_id: id});
    return responseIntem
}


export { interTramo, getTramos, getTramo, updateTramo, deleteTramo };