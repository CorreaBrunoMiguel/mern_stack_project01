import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json()); // permite aceitar arquivos JSON (req.body)

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`);
});
