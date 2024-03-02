import { errorFormatter } from "../utils/errorFormatter.js";
import jwt from "jsonwebtoken";

export const tokenValidator = (req, _res, next)=>{
    if (!req.cookies.token){
        throw errorFormatter(401, "Unauthorized");
    }

    const token = req.cookies.token;

    let jwtValue;

    //verify token
    try {
        jwtValue = jwt.verify(token, process.env.JWT_SECRET);
    } catch(e){
        throw errorFormatter(401, "jwt expired");
    }

    req.userId = jwtValue.id;
    
    next();
}