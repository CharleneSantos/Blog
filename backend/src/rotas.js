import express from "express";
import { listarUsuarios, obterUsuario } from "./controllers/users.js";

const rotas = express();

rotas.get("/users", listarUsuarios);

rotas.get("/users/:id", obterUsuario);

export default rotas;
