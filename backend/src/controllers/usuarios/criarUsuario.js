import pool from "../../database.js";
import bcrypt from "bcryptjs";

const criarUsuario = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const senha = await bcrypt.hash(password, salt);
    const query =
      "insert into users (name, email, password) values ($1, $2, $3) returning *";

    const params = [name, email, senha];

    const usuario = await pool.query(query, params);

    if (usuario.rowCount === 0) {
      return res
        .status(500)
        .json({ message: "Não foi possível incluir usuário" });
    }

    return res.status(201).send(usuario.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default criarUsuario;
