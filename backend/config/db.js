import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Conectado com Sucesso`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
    process.exit(1); // 1 falha 0 sucesso
  }
};
