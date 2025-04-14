import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import {pool} from './database/database'; // Importa la conexión a la base de datos
 
dotenv.config();
 
const app: Express = express();
const port = process.env.PORT || 3001;
 
app.use(cors());
app.use(bodyParser.json());
 
app.use('/auth', authRoutes);
 
app.get('/', (req: Request, res: Response) => {
  res.send('Backend server is running!');
});
 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
 
// Asegúrate de cerrar la conexión a la base de datos al finalizar (opcional para un servidor simple)
process.on('SIGINT', async () => {
  console.log('Closing database connection...');
  await pool.end();
  process.exit();
});