// GET /posts/search - Busca de Posts:
// ▪
// Este endpoint permitirá a busca de posts por palavras-chave. Os usuários poderão passar uma query string com o termo de busca e o sistema retornará uma lista de posts que contêm esse termo no título ou conteúdo.

import pool from "../../database.js";

const buscarPost = async (req, res) => {
  const { id } = req.params;

  try {
    const query = " from postagens where id = $1 returning *";
    const params = [Number(id)];
    const postDeletado = await pool.query(query, params);
    if (postDeletado.rowCount === 0) {
      return res.status(404).json({ message: "Postagem não encontrada" });
    }

    return res.status(200).send(postDeletado.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default buscarPost;
