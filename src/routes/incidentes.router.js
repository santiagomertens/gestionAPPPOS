import { Router } from "express";
import { createIncidente, deleteIncidenteById, getCantidadIncidentes, getIncidentes, incidenteById, updateIncidenteById } from "../controllers/incidentes.controller";

const router = Router();

router.get('/incidentes', getIncidentes)

router.post('/incidentes', createIncidente)

router.get('/incidentes/count', getCantidadIncidentes)

router.get('/incidentes/:id', incidenteById)

router.delete('/incidentes/:id', deleteIncidenteById)

router.put('/incidentes/:id', updateIncidenteById)


export default router