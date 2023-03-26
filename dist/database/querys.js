"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getIncidentes: "SELECT * FROM INCIDENTES",
  crearIncidentes: "insert into incidentes (titulo, descripcion) values (@titulo, @descripcion)",
  incidenteById: "select * from incidentes where Id = @id",
  deleteIncidente: "delete from incidentes where Id=@id",
  getCantidadIncidentes: 'select count(*) from incidentes',
  updateIncidenteById: "update incidentes set Titulo = @titulo, Descripcion = @descripcion where Id=id"
};
exports.querys = querys;