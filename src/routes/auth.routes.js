import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { validationLogin } from "../middlewares/validationLogin.js";

const authRouter = Router();

authRouter.post("/login", validationLogin, login);

export default authRouter;