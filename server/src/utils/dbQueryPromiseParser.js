import { connectionPool } from "../db/db.js";

export const dbQueryPromiseParser = (query, wildcardValues)=>{

    if (!Array.isArray(wildcardValues)){
        wildcardValues = [wildcardValues];
    }

    return new Promise((resolve, reject)=>{
        connectionPool.query(query, wildcardValues, (err, result)=>{
            if (err){
                reject(err)
            } else {
                resolve(result);
            }
        });
    });
}