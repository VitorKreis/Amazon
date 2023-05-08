import express from 'express';
import env from 'dotenv';
import session from 'express-session';

env.config();

// Imports Files
import homeRouter from './routes/homeRouter';
import productRouter from './routes/productRouter';
import PhotoRouter from './routes/photoRouter';
import userRouter from './routes/userRouter';
import LoginRouter from './routes/LoginRouter';

// Confing Session
const sessionConfig = session({
  secret: process.env.SecretSession,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: Number(process.env.SessionAge),
    secure: true,
  },
});

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
    this.app.use(sessionConfig);
  }

  Routes() {
    this.app.use('/', homeRouter);
    this.app.use('/products', productRouter);
    this.app.use('/pictures', PhotoRouter);
    this.app.use('/users', userRouter);
    this.app.use('/login', LoginRouter);
  }
}

export default new App().app;
