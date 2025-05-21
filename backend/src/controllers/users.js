import users from "../dados/dados.js";
import pool from "../connection.js";

export const listarUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await pool.query("select * from users");
    return res.status(200).send(listaUsuarios.rows);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const obterUsuario = async (req, res) => {
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

export const criarUsuario = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const query =
      "insert into users (name, email, password) values ($1, $2, $3) returning *";
    const params = [name, email, password];

    const usuario = await pool.query(query, params);

    if (usuario.rowCount === 0) {
      return res
        .status(500)
        .json({ message: "Não foi possível incluir usuário" });
    }

    return res.status(201).send(usuario.rows[0]);
  } catch (error) {}
};

export const atualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const query =
      "update users set name = $1, email = $2, password = $3  returning *";
    const params = [name, email, password];
    const usuarioAtualizado = await pool.query(query, params);

    if (usuarioAtualizado.rowCount === 0) {
      return res.status(404).json({ message: "Usuário não atualizado" });
    }
    res.status(200).send(usuarioAtualizado.rows[0]);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const deletarUsuario = async (req, res) => {
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
