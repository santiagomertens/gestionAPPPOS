"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _incidentes = require("../controllers/incidentes.controller");
var router = (0, _express.Router)();
router.get('/incidentes', _incidentes.getIncidentes);
router.post('/incidentes', _incidentes.createIncidente);
router.get('/incidentes/count', _incidentes.getCantidadIncidentes);
router.get('/incidentes/:id', _incidentes.incidenteById);
router["delete"]('/incidentes/:id', _incidentes.deleteIncidenteById);
router.put('/incidentes/:id', _incidentes.updateIncidenteById);
var _default = router;
exports["default"] = _default;