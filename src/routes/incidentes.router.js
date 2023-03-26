import { Router } from "express";
import { createIncidente, getIncidentes, incidenteById } from "../controllers/incidentes.controller";

const router = Router();

router.get('/incidentes', getIncidentes)


router.post('/incidentes', createIncidente)

router.get('/incidentes/:id', incidenteById)

router.delete('/incidentes', )

router.put('/incidentes', )


export default router