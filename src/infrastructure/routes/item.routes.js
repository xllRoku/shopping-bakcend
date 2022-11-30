import { Router } from "express";
import { itemCreateController } from "../controllers/item-create.controller.js";

const router = Router();

router.post("/create", itemCreateController);

export default router;
