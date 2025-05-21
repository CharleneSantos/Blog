import express from "express";
import {
  listarUsuarios,
  obterUsuario,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "./controllers/users.js";

const rotas = express();

rotas.get("/users", listarUsuarios);
rotas.get("/users/:id", obterUsuario);

rotas.post("/users", criarUsuario);

rotas.put("/users/:id", atualizarUsuario);

rotas.delete("/users/:id", deletarUsuario);

// rotas.path("/users");

export default rotas;
