import express from "express";
import rotasUsuario from "./src/routes/usuarioRoute.js";
import rotasPost from "./src/routes/postRoute.js";
import login from "./src/controllers/usuarios/login.js";
import autenticadorToken from "./src/middlewares/autenticadorToken.js";
import listarPosts from "./src/controllers/postagens/listarPosts.js";
import lerPost from "./src/controllers/postagens/lerPost.js";

const app = express();

app.use(express.json());

app.post("/login", login);
app.get("/login", login);
app.get("/postagens", listarPosts);
app.get("/postagem/:id", lerPost);

//middleware de autenticação
app.use(autenticadorToken);
app.use(rotasUsuario);
app.use(rotasPost);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
