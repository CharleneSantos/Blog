import express from "express";
import listarUsuarios from "../controllers/usuarios/listarUsuarios.js";
import obterUsuario from "../controllers/usuarios/obterUsuario.js";
import criarUsuario from "../controllers/usuarios/criarUsuario.js";
import atualizarUsuario from "../controllers/usuarios/atualizarUsuario.js";
import excluirUsuarioUsuario from "../controllers/usuarios/excluirUsuario.js";
import validador from "../middlewares/validador.js";

const rotasUsuario = express.Router();

// Rotas de Usuarios

rotasUsuario.get("/users", listarUsuarios);
rotasUsuario.get("/users/:id", obterUsuario);
rotasUsuario.delete("/users/:id", excluirUsuarioUsuario);
rotasUsuario.use("/users", validador);
rotasUsuario.post("/users", criarUsuario);
rotasUsuario.put("/users/:id", atualizarUsuario);

// rotas.path("/users");

export default rotasUsuario;
