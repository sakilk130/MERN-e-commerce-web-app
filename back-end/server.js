import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoute from './routes/porductRoute.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/products', productRoute);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`backend server is running on ${PORT} PORT`);
});
