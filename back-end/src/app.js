// Imports packagens
import express from 'express';
// Import files
import homeRouter from './routes/home.js';
import productRouter from './routes/product.js';
import Connection from './database/MongoDB/connection.js';

Connection();
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
    this.app.use('/products/', productRouter);
  }
}

export default new App().app;
