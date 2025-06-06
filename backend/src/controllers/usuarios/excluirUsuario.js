import pool from "../../database.js";

const excluirUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "delete from users where id = $1 returning *";
    const params = [Number(id)];
    const usuarioDeletado = await pool.query(query, params);
    if (usuarioDeletado.rowCount === 0) {
      return res.status(404).json({ message: "Usuário não foi encontrado" });
    }

    return res.status(200).send(usuarioDeletado.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default excluirUsuario;
