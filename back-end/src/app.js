import express from 'express';
import env from 'dotenv';

env.config();

// Imports Files
import homeRouter from './routes/homeRouter';
import productRouter from './routes/productRouter';
import PhotoRouter from './routes/photoRouter';

// Config Database
import './database';

class App {
  constructor() {
    this.app = express();
    this.Middlewares();
    this.Routes();
  }

  Middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  Routes() {
    this.app.use('/', homeRouter);
    this.app.use('/products', productRouter);
    this.app.use('/pictures/', PhotoRouter);
  }
}

export default new App().app;
