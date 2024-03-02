import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import { AuthController } from "./auth.controller.js";
import { tokenValidator } from "../../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/", asyncHandler(AuthController.authUser))
//cambiar nombre ruta a validateSession
authRouter.get('/validSession', tokenValidator, AuthController.validateUserSession)

export default authRouter;