import express from 'express';
import authRouter from './routes/auth.routes.js';
import productRouter from './routes/product.routes.js';
import dataRouter from './routes/data.routes.js'; // Import the new dataRouter
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());    
// Rutas de autenticación
app.use('/auth',authRouter);

// Rutas de productos
app.use('/product',productRouter);

// Rutas genéricas para obtener datos de colecciones
app.use('/data', dataRouter); // Use the new dataRouter

export default app;