import { dbQueryPromiseParser } from "../../utils/dbQueryPromiseParser.js";
import { errorFormatter } from "../../utils/errorFormatter.js";
import bcrypt from "bcryptjs";

async function postUser(req, res){
    const body = req.body;

    if (!body.name && !body.email && !body.password){
        throw errorFormatter(400, "name, email and password are required");
    }

    if (body.password.length < 8){
        throw errorFormatter(400, "password must have at least 8 characters");
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(body.email)){
        throw errorFormatter(400, "invalid email format");
    }

    //check if email already exists. If not exists, insert user en database
    const result = await dbQueryPromiseParser("SELECT email FROM users WHERE email = ?", [body.email]);

    if (result.length !== 0){
        throw errorFormatter(409, "Invalid email. Test with other");
    }

    const encryptedPassword = bcrypt.hashSync(body.password);

    await dbQueryPromiseParser("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [body.name, body.email, encryptedPassword]);

    res.status(201).json({
        statusCode : 201,
        message : "User created succesfully",
        createdUser : {
            name : body.name,
            email : body.email
        }
    });
}

async function getUser(req, res){
    const userId = req.userId;

    const userData = await dbQueryPromiseParser("SELECT name, email FROM users WHERE id = ?", [userId]);

    res.status(200).json({
        statusCode : 200,
        data : userData
    })

}

function logoutUser(_req, res){
    res.clearCookie("token");
    res.status(200).json({
        statusCode : 200,
        message : "User log out"
    })
}

export const UsersController = {
    postUser,
    getUser,
    logoutUser
}