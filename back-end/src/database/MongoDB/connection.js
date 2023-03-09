import moongose from 'moongose';

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export default function Connection() {
  mongoose.set('strictQuery', true);
  return mongoose.createConnection(process.env.ConnectionUrl);
}
