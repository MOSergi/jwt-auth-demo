import { errorFormatter } from "../../utils/errorFormatter.js";
import { dbQueryPromiseParser } from "../../utils/dbQueryPromiseParser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function authUser(req, res){
    const body = req.body;

    if (!body.email && !body.password){
        throw errorFormatter(400, "email and password are required");
    }

    const userData = await dbQueryPromiseParser("SELECT id, password FROM users WHERE email = ?", [body.email]);

    if (userData.length === 0){
        throw errorFormatter(409, "Invalid email");
    }

    const userDbPassword = userData[0].password;
    const userId = userData[0].id;

    if (!bcrypt.compareSync(body.password, userDbPassword)){
        throw errorFormatter(401, "invalid email or password");
    }

    const token = jwt.sign({ id : userId }, process.env.JWT_SECRET, {
        expiresIn : "30m"
    });

    res.cookie('token', token, { 
        httpOnly : true,
        secure : true,
        expiresIn : new Date(Date.now() + 30 * 60 * 1000)
    });

    res.status(200).json({
        statusCode : 200,
        message : "Loged In"
    })
}

export const AuthController = {
    authUser
}