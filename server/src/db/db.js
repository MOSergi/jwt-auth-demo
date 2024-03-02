import mysql from "mysql2";
import { dbConfig } from "./config.js";

export const connectionPool = mysql.createPool(dbConfig);
