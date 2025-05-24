import pool from "../../connection.js";

const listarUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await pool.query("select * from users");
    return res.status(200).send(listaUsuarios.rows);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
export default listarUsuarios;
