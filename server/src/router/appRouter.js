import { Router } from "express";
import usersRouter from "../modules/users/usersRouter.js";
import authRouter from "../modules/auth/auth.router.js";

const appRouter = Router();

appRouter.use('/users', usersRouter);
appRouter.use('/auth', authRouter);

export default appRouter;

