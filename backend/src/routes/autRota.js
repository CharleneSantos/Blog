import express from "express";
import autenticarUsuario from "../controllers/autenticacao/autenticarUsuario.js";

const rotaAutenticacao = express.Router();

//Rotas de Postagens
rotaAutenticacao.post("/autenticacao", autenticarUsuario);

export default rotaAutenticacao;
