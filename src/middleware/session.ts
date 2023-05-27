import { NextFunction,Request,Response } from "express";
import { verifyToken } from "../util/jwt.handles";

const checkJwt = (req: Request, res: Response, next: NextFunction) =>{
    try{

        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop(); // esta funcion rrmueve el ultimo valor de un array
                                                        
        const isOk = verifyToken(`${jwt}`); 
        if (!isOk){
            res.status(401);
            res.send('NO_TIENE_UN_JWT_VALIDO');
        }else{
            console.log({jwtByUser});
            next(); 
        } 
    }catch(e){
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};

export { checkJwt }