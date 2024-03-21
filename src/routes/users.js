import { Router } from "express";
import { createUsuario, getAllUsuarios, getUsuarioById } from "../controllers/usuariosController";

const router = Router();

router.get("/", getAllUsuarios);

router.get("/:userId", getUsuarioById);

router.post("/", createUsuario);

export default router;
