import express from "express";
import dotenv from 'dotenv';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 5000;

const app = express();
app.use('/api/users', userRoutes);
app.get('/', (req,res) =>res.send("Server is ready now"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));