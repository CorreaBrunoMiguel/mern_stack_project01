import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Servidor está ativo");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`);
});
