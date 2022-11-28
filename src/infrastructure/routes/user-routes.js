import { Router } from "express";
import { userRegisterController } from "../controllers/user-register.controller.js";

const router = Router();

router.post("/register", userRegisterController);

export default router;
