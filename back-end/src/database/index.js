import { Sequelize } from 'sequelize';
import Product from '../models/Product';
import Picture from '../models/Picture';
import database from '../config/database';

// Sequelize Connetion
const connection = new Sequelize(database);

const models = [Product, Picture];

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
