// Imports packagens
import express from 'express';
// Import
import homeRouter from './routes/home.js';

// Inicicando app
class App {
  constructor() {
    this.app = express();
    this.routes();
    this.middleware();
  }

  middleware() {

  }

  routes() {
    this.app.use('/', homeRouter);
  }
}

export default new App().app;
