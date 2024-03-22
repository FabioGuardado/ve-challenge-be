import { Router } from "express";
import {
  createSolicitud,
  getAllSolicitudes,
  getSolicitudById,
} from "../controllers/solicitudesController.js";
import multerUpload from "../lib/multerUpload.js";

const router = Router();

router.get("/", getAllSolicitudes);

router.get("/:solicitudId", getSolicitudById);

router.post(
  "/",
  multerUpload.fields([
    { name: "profile", maxCount: 1 },
    { name: "documentoIdentidad", maxCount: 1 },
  ]),
  createSolicitud
);

export default router;
