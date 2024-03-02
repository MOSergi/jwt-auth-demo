import { errorFormatter } from "../utils/errorFormatter.js";
import jwt from "jsonwebtoken";

export const tokenValidator = (req, res, next)=>{
    if (!req.cookies.token){
        throw errorFormatter(401, "Token not provided");
    }

    const token = req.cookies.token;

    let jwtValue;

    //verify token
    try {
        jwtValue = jwt.verify(token, process.env.JWT_SECRET);
    } catch(e){
        res.clearCookie("token");
        throw errorFormatter(401, "Invalid token");
    }

    req.userId = jwtValue.id;
    
    next();
}