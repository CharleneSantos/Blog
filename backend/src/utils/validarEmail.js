import dotenv from "dotenv";
dotenv.config();
import pool from "../database.js";

const validarEmail = async (email) => {
  const query = "select * from users where email = $1";
  const params = [email];

  return await pool.query(query, params);
};

export default validarEmail;
