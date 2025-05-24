import express, { Router } from "express";
import listarUsuarios from "../src/controllers/usuarios/listarUsuarios.js";
import obterUsuario from "../src/controllers/usuarios/obterUsuario.js";
import criarUsuario from "../src/controllers/usuarios/criarUsuario.js";
import atualizarUsuario from "../src/controllers/usuarios/atualizarUsuario.js";
import excluirUsuarioUsuario from "../src/controllers/usuarios/excluirUsuario.js";
import validador from "./middlewares/validador.js";

const rotas = express();

rotas.use("/users", validador);

rotas.get("/users", listarUsuarios);
rotas.get("/users/:id", obterUsuario);

rotas.post("/users", criarUsuario);

rotas.put("/users/:id", atualizarUsuario);

rotas.delete("/users/:id", excluirUsuarioUsuario);

// rotas.path("/users");

export default rotas;
