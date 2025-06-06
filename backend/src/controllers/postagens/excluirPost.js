// DELETE /posts/:id - Exclusão de Postagens:
// ▪
// Permite que professores(as) excluam uma postagem específica, usando o ID do post como parâmetro.
import pool from "../../database.js";

const excluirPost = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "delete from postagens where id = $1 returning *";
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

export default excluirPost;
