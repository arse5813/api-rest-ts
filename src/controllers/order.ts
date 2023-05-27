import { Request, Response } from "express"; 
import { handleHttp } from "../util/error.handle";

const getItem = (req: Request, res: Response) => {

    try{
        res.send({
            data: "esto solo ves las persona con session /JWT",
        });
    }catch(e){
        handleHttp(res, "ERROR_GET_BLOGS")
    }
}

export { getItem };