import express from "express";
import listarPosts from "../controllers/postagens/listarPosts.js";
import lerPost from "../controllers/postagens/lerPost.js";
import criarPost from "../controllers/postagens/criarPost.js";
import editarPost from "../controllers/postagens/editarPost.js";
import excluirPost from "../controllers/postagens/excluirPost.js";

const rotasPost = express.Router();

//Rotas de Postagens
rotasPost.get("/postagens", listarPosts);
rotasPost.get("/postagem/:id", lerPost);
rotasPost.post("/postagem", criarPost);
rotasPost.put("/postagem/:id", editarPost);
rotasPost.delete("/postagem/:id", excluirPost);

export default rotasPost;
