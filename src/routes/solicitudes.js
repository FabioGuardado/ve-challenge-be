import { Router } from "express";
import { createSolicitud, getAllSolicitudes, getSolicitudById } from "../controllers/solicitudesController";

const router = Router();

router.get("/", getAllSolicitudes);

router.get("/:solicitudId", getSolicitudById);

router.post("/", createSolicitud);

export default router;
