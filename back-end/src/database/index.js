import { Sequelize } from 'sequelize';
import Product from '../models/Product';
import database from '../config/database';

// Sequelize Connetion
const connection = new Sequelize(database);

const models = [Product];

models.forEach((model) => model.init(connection));
