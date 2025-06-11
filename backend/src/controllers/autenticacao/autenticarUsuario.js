import pool from "../../database.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const minhasenha = process.env.SECRET_KEY;

const autenticarUsuario = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new Error("Informe seu email");
  } else if (!password) throw new Error("Informe a senha");
  try {
    const query = "select * from users where email = $1 and password= $2";
    const params = [email, password];
    const usuario = await pool.query(query, params);

    if (usuario.rowCount === 0) {
      return res.status(404).send("Email ou senha inválido");
    } else if (params.password === usuario.password) {
      console.log(`pegou a senha`);
      const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        minhasenha,
        { expiresIn: 60 * 60 }
      );
      return res.status(200).send(token);
    }
    // return res.status(200).send(
    //   usuario.rows.map(function (item) {
    //     return item.name;
    //   }).json
    // );
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default autenticarUsuario;
