import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import restaurantRoutes from './routes/restaurantRoute.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
  .then(() => console.log('Successfully connected to database'))
  .catch(err => console.log('Error to connect to database:', err));

app.get('/restaurant', (req, res) => {
  res.send('Find my Restaurant Home Page');
});

// Rotas
restaurantRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port - ${PORT}`);
});