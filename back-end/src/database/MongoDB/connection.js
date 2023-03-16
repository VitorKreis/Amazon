import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export default async function Connection() {
  try {
    const connection = await mongoose.connect(process.env.ConnectionUrl)
      .then(() => console.log('Conexao com o banco de dados completa'))
      .catch((e) => console.log(e));
  } catch (error) {
    console.log(error);
  }
}
