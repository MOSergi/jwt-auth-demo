export const dbConfig = {
    host : "localhost",
    connectionLimit : 10,
    user : process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port : 3306
}