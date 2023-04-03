import express from 'express';

// Imports Files
import homeRouter from './routes/homeRouter';

class App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app : any;

  constructor() {
    this.app = express();
    // this.Middlewares();
    this.Routes();
  }

  Routes() {
    this.app.use('/', homeRouter);
  }
}

export default new App().app;
