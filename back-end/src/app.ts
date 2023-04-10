import express from 'express';

// Imports Files
import homeRouter from './routes/homeRouter';
import productRouter from './routes/productRouter';

// Connectin MongoDB
import Connect from './database/DataBase';

Connect();

class App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app : any;

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
    this.app.use('/product/', productRouter);
  }
}

export default new App().app;
