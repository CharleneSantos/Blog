import pool from "../../database.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const minhasenha = process.env.SECRET_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new Error("Informe seu email");
  } else if (!password) throw new Error("Informe a senha");
  try {
    const query = "select * from users where email = $1";
    const params = [email];
    const usuario = await pool.query(query, params);

    if (usuario.rowCount === 0) {
      return res.status(404).send("Email ou senha inválido");
    } else if (usuario.rowCount > 0) {
      const isValidPassword = await bcrypt.compare(
        password,
        usuario.rows[0].password
      );
      if (isValidPassword === false) {
        return res.status(404).send("Email ou senha inválido");
      } else if (isValidPassword === true) {
        const token = jwt.sign(
          { id: usuario.id, email: usuario.email },
          minhasenha,
          { expiresIn: 120 }
        );
        return res.status(200).json({
          message: "Login realizado com sucesso!",
          token: token,
        });
      }
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export default login;
