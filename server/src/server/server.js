import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import appRouter from "../router/appRouter.js";
import { connectionPool } from "../db/db.js";

export default class Server {

    #app = express();
    #port;

    constructor(port){
        this.#port = port;
    }

    startApp(){
        this.#config();
        this.#databseConnection();
        this.#middlewares();
        this.#routes();
        this.#errorHandler();
    }

    #config(){
        this.#app.set("PORT", this.#port);
    }

    #databseConnection(){
        connectionPool.query("SELECT 1 + 1", (err)=>{
            if (err){
                console.log(err);
                throw err;
            }
        })
    }

    #middlewares(){
        this.#app.use(express.json());

        this.#app.use(cors({
            origin : "http://localhost:5173",
            credentials : true
        }));

        this.#app.use(cookieParser());
    }

    #routes(){
        this.#app.use('/api/v1', appRouter);
    }

    #errorHandler(){
        this.#app.use((err, _req, res, next)=>{
            if (res.headersSent) {
                return next(err);
            }

            console.log(err);

            if (err.statusCode && err.message){
                res.status(err.statusCode).json({
                    statusCode : err.statusCode,
                    message : err.message
                })
            } else {
                res.status(500).json({
                    statusCode : 500,
                    msg : "Unexpected error"
                })
            }
        })
    }

    listen(){
        this.#app.listen(this.#app.get("PORT"), ()=>{
            console.log(`App running on port ${this.#app.get("PORT")}`);
        })
    }
}