import { Router } from "express";
import { UsersController } from "./usersController.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { tokenValidator } from "../../middleware/auth.middleware.js";

const usersRouter = Router();

usersRouter.get('/', tokenValidator, asyncHandler(UsersController.getUser));
usersRouter.get('/logout', tokenValidator, asyncHandler(UsersController.logoutUser));
usersRouter.post('/', asyncHandler(UsersController.postUser));

export default usersRouter;