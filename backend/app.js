import express from "express";
import dotenv from "dotenv";
import rotasUsuario from "./src/routes/usuarioRoute.js";
import rotasPost from "./src/routes/postRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(rotasUsuario);
app.use(rotasPost);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
