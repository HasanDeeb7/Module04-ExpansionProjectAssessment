import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.post("/create", signUp);
userRouter.post("/signin", signIn);
