import { Request, Response } from "express"
import { resgisterNewUser,loginUser } from "../services/auth";


const registerCtrol = async({ body }: Request, res:Response)=> {
     const responseUser = await resgisterNewUser(body);
     res.send(responseUser);
}


const loginCtrol = async({body}: Request, res:Response) => {
    const {email, password} = body;
    const responseUser = await loginUser({email, password});

    if(responseUser=== 'PASSWORD_INCORRECT'){
        res.status(403)
        res.send(responseUser);
    }else{
        res.send(responseUser);
    }
   
};

export { loginCtrol, registerCtrol};