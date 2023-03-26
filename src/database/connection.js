import sql from 'mssql';

const dbsettings = {
    user : "incidentes",
    password : "incidentes",
    server : "localhost",
    database: "dbincidentes",
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings)
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export {sql};