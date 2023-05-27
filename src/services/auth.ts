import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from '../models/user';
import { encrypt, comparaPassword } from "../util/bcrypt.handle";
import { generateToke } from "../util/jwt.handles";


const resgisterNewUser = async({email, password, name}: User) =>{

    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "ALREADY_USER";

    const passHash = await encrypt(password);

    const registerNewUser = await UserModel.create({ 
        email, 
        password: passHash, 
        name
    });
    return registerNewUser;
};

const loginUser = async({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const IsCorrect = await comparaPassword(password, passwordHash);

    if(!IsCorrect) return "PASSWORD_INCORRECT"

    const token = generateToke(checkIs.email);

    const data = {
        token,
        user: checkIs
    }
   
    return data;
};

export { resgisterNewUser, loginUser };