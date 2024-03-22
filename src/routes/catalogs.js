import { Router } from "express";
import { createDepartamento, getAllDepartamentos } from "../controllers/departamentosController.js";
import { createMunicipio, getAllMunicipios, getMunicipiosByDepartamentoId } from "../controllers/municipiosController.js";

const router = Router();

router.get("/departamentos", getAllDepartamentos);

router.get("/municipios", getAllMunicipios);

router.get("/municipios/:departamentoId", getMunicipiosByDepartamentoId);

router.post("/departamentos", createDepartamento);

router.post("/municipios", createMunicipio);

export default router;
