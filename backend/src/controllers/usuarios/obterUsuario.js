import pool from "../../database.js";

const obterUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "select * from users where id = $1";
    const params = [Number(id)];
    const usuarioEncontrado = await pool.query(query, params);

    if (usuarioEncontrado.rowCount === 0) {
      return res.status(404).send("Usuário não encontrado");
    }
    return res.status(200).send(usuarioEncontrado.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default obterUsuario;
