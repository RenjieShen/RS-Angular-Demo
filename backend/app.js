import express from 'express';
import carsRouter from './routes/cars.js';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
})

app.use(express.urlencoded({ extended: true }));

app.use(carsRouter);

app.use((req, res, next) => {
  res.status(404).send('Data not found');
});

export default app;