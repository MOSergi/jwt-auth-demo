import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import { AuthController } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/", asyncHandler(AuthController.authUser))

export default authRouter;