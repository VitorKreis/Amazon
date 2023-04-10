import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

async function Connect() {
  try {
    await mongoose.connect(process.env.URL_DATABASE as string);
    console.log('Conexao com o banco de dados realizada!');
  } catch (error) {
    console.log(error);
  }
}
export default Connect;
