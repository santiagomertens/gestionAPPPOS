import  express  from 'express';
import config from './config'
import incidentesRouter from "./routes/incidentes.router";


const app = express();

//configuraciones
app.set('port', config.port)


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(incidentesRouter);

export default app