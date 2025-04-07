import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Servidor está ativo");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}\nhttp://localhost:${PORT}`);
});
