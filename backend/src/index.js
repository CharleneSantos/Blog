import express from "express";

import rotas from "./rotas.js";

const app = express();

app.use(rotas);

const port = 3030;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
