export const querys = {
    getIncidentes: "SELECT * FROM INCIDENTES",
    crearIncidentes: "insert into incidentes (titulo, descripcion) values (@titulo, @descripcion)",
    incidenteById: "select * from incidentes where Id = @id"
}