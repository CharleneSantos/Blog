// import dotenv from "dotenv";
// dotenv.config();
import pool from "../../database.js";

const listarUsuarios = async (req, res) => {
  try {
    // console.log(process.env.DATABASE);
    const listaUsuarios = await pool.query("select * from users");
    return res.status(200).send(listaUsuarios.rows);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
export default listarUsuarios;
