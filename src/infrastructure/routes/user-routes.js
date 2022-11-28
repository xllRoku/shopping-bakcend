import { Router } from "express";
import { userLoginController } from "../controllers/user-login.controller.js";
import { userRegisterController } from "../controllers/user-register.controller.js";

const router = Router();

router.post("/register", userRegisterController);
router.post("/login", userLoginController);

export default router;
