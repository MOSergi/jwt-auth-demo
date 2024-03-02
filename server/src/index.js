import 'dotenv/config';
import Server from "./server/server.js";

const server = new Server(4000);

server.startApp();

server.listen();