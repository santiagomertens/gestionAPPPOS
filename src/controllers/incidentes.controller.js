import { getConnection, sql, querys } from "../database";

export const getIncidentes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getIncidentes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createIncidente = async (req, res) => {
  const { titulo, descripcion } = req.body;
  if (titulo == null || descripcion == null) {
    return res.status(400).json({ msg: "faltan datos obligatorios" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("titulo", sql.VarChar, titulo)
      .input("Descripcion", sql.Text, descripcion)
      .query(querys.crearIncidentes);

    res.json({ titulo, descripcion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const incidenteById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(querys.incidenteById);
  console.log(result);
  res.send(result.recordset[0]);
};

export const deleteIncidenteById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(querys.deleteIncidente);

  res.sendStatus(204);
};

export const getCantidadIncidentes = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(querys.getCantidadIncidentes);
  res.json(result.recordset[0][""]);
};

export const updateIncidenteById = async (req, res) => {
  const { titulo, descripcion } = req.body;
  const { id } = req.params;
  if (titulo == null || descripcion == null) {
    return res.status(400).json({ msg: "faltan datos obligatorios" });
  }
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("titulo", sql.VarChar, titulo)
    .input("descripcion", sql.VarChar, descripcion)
    .input('id', sql.Int, id)
    .query(querys.updateIncidenteById);

    res.json({titulo, descripcion})
};
