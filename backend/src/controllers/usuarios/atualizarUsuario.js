import pool from "../../database.js";
import validarEmail from "../../utils/validarEmail.js";

const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    const result = await validarEmail(email);

    if (result.rowCount > 0) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }
    const query =
      "update users set name = $1, email = $2, password = $3  where id=$4  returning *";
    const params = [name, email, password, Number(id)];
    const usuarioAtualizado = await pool.query(query, params);

    if (usuarioAtualizado.rowCount === 0) {
      return res.status(404).json({ message: "Usuário não atualizado" });
    }
    res.status(200).send(usuarioAtualizado.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default atualizarUsuario;
