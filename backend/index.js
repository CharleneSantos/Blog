import express from "express";
import dotenv from "dotenv";
import rotasUsuario from "./src/routes/usuarioRoute.js";
import rotasPost from "./src/routes/postRoute.js";
import criarUsuario from "./src/controllers/usuarios/criarUsuario.js";
import autenticarUsuario from "./src/controllers/autenticacao/autenticarUsuario.js";
dotenv.config();

const app = express();

app.use(express.json());

app.post("/users", criarUsuario);
app.get("/autenticacao", autenticarUsuario);

//middleware de autenticação

app.use(rotasUsuario);
app.use(rotasPost);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
