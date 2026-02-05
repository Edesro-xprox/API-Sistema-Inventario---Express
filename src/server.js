import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

dotenv.config();
await connectDB();

app.listen(process.env.PORT || 3000, () =>{
    console.log(`Puerto ${process.env.PORT} siendo escuchado`);
});