// título, conteúdo e autor no corpo da requisição.
import pool from "../../database.js";

const criarPost = async (req, res) => {
  const { titulo, descricao, conteudo, autor, imagem, tags } = req.body;
  try {
    const query =
      "insert into postagens (titulo, descricao, conteudo, autor, imagem, tags) values ($1, $2, $3, $4, $5, $6) returning *";
    const params = [titulo, descricao, conteudo, autor, imagem, tags];

    const post = await pool.query(query, params);

    if (post.rowCount === 0) {
      return res
        .status(500)
        .json({ message: "Não foi possível incluir postagem" });
    }

    return res.status(201).send(post.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default criarPost;
