import express from "express";
import autenticadorToken from "../middlewares/autenticadorToken.js";

const rotaAutenticacao = express.Router();

//Rotas de Postagens
rotaAutenticacao.get("/protected", autenticadorToken, (req, res) => {
  res.status(200).json({ message: "Bem vindo à rota autenticada!" });
});

export default rotaAutenticacao;
