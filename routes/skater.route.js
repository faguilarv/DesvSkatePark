import { Router } from "express";
import { SkaterController } from "../controllers/skater.controller.js";

const router = Router();

router.post("/register", SkaterController.register);
router.post("/login", SkaterController.login);
router.post("/imagen", SkaterController.uploadImage);
export default router;
