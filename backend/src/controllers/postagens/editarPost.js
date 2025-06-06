import pool from "../../database.js";

const editarPost = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, conteudo, autor, imagem, tags } = req.body;

  try {
    const query =
      "update postagens set titulo=$1, descricao=$2, conteudo=$3, autor=$4, imagem=$5, tags=$6  where id=$7  returning *";
    const params = [
      titulo,
      descricao,
      conteudo,
      autor,
      imagem,
      tags,
      Number(id),
    ];
    const postEditado = await pool.query(query, params);

    if (postEditado.rowCount === 0) {
      return res.status(404).json({ message: "Postagem não atualizada" });
    }
    res.status(200).send(postEditado.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default editarPost;
