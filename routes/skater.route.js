import { Router } from "express";
import {
  login_get,
  login_post,
  registrar_post,
  registrar_get,
  getAdmin,
  getUser,
  getAllSkaters,
  nuevoEstado,
  getUserToken,
  deleteUser,
  updateSkater,
} from "../controllers/skater.controller.js";
import { verifyToken, verifyAdmin } from "../middlewares/jwt.middleware.js";

const router = Router();

router.get("/", getAllSkaters);

router.get("/login", login_get);

router.post("/login", login_post);

router.get("/registrar", registrar_get);

router.post("/registrar", registrar_post);

router.get("/admin", getAdmin);

router.get("/datos", getUser);

router.get("/datosUser", verifyToken, getUserToken);

router.post("/estado", nuevoEstado);

router.delete("/datos", deleteUser);

router.put("/update", updateSkater);

export default router;
