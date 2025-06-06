import pool from "../../database.js";

const lerPost = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "select * from postagens where id = $1";
    const params = [Number(id)];
    const postagemEncontrada = await pool.query(query, params);

    if (postagemEncontrada.rowCount === 0) {
      return res.status(404).send("Postagem não encontrada");
    }
    return res.status(200).send(postagemEncontrada.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default lerPost;
